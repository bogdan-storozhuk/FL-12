import React, {Component} from 'react';
import {lessonAddedToCourse,fetchCourseLessons} from '../../actions';
import {withCourseService} from '../hoc';
import {compose} from '../../utils';
import {connect} from 'react-redux';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator';
import FormHeader from '../form-header';
import FormField from '../form-field';
import FormControls from '../form-controls';
import './lesson-form.css';

class LessonForm extends Component {
    
    state={
        id:Math.random().toString(36).substr(2, 9),
        topic:'',
        date:'',
        lecturer:'',
        duration:''
    };
    onTopicChange=(e)=>{
        this.setState({
            topic:e.target.value
        });
    }
    onDateChange=(e)=>{
        this.setState({
            date:e.target.value
        });
    }
    onLecturerChange=(e)=>{
        this.setState({
            lecturer:e.target.value
        });
    }
    onDurationChange=(e)=>{
        this.setState({
            duration:e.target.value
        });
    }
    onSubmit=()=>{
        this.props.onItemAdded(this.state);
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            return;
        }
        const {courseLessons}=this.props;
        const {itemId} =this.props.itemId;
        if(courseLessons.length===0){
            return;
        }
        if(itemId){
            const lesson=this.props.courseLessons.filter(item=>item.id==itemId);
           this.setState({
               id:lesson[0].id,
               topic:lesson[0].topic,
               date:lesson[0].date,
               lecturer:lesson[0].lecturer,
               duration:lesson[0].duration
           });
        }
    }

    componentDidMount(){
        const {fetchCourseLessons, courseLessons}=this.props;
        const {itemId} =this.props.itemId;
        if(courseLessons.length === 0){
            fetchCourseLessons();
            return;
        }
        if(itemId){
            const lesson=this.props.courseLessons.filter(item=>item.id==itemId);
           this.setState({
               id:lesson[0].id,
               topic:lesson[0].topic,
               date:lesson[0].date,
               lecturer:lesson[0].lecturer,
               duration:lesson[0].duration
           });
        }
    }
    render() {
        const {loading,error}=this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>;
        } 
        return (<div className='form-container'>
                     <form className='lesson-form'>
                        <FormHeader title={'New lesson'}/>
                        <FormField value={this.state.topic} onLabelChange={this.onTopicChange} fieldName={'topic'}/>
                        <FormField value={this.state.date} onLabelChange={this.onDateChange} fieldName={'date'}/>
                        <FormField value={this.state.lecturer} onLabelChange={this.onLecturerChange} fieldName={'lecturer'}/>
                        <FormField value={this.state.duration} onLabelChange={this.onDurationChange} fieldName={'duration'}/>
                        <FormControls onSubmit={this.onSubmit}/>
                    </form>
                </div>);
    }
}

const mapDispatchToProps=(dispatch,{courseService})=>{
    return{
        onItemAdded:(lesson)=>{dispatch(lessonAddedToCourse(lesson))},
        fetchCourseLessons:fetchCourseLessons(dispatch,courseService)
    }
}
const mapStateToProps=({courseLessons,loading,error})=>{
    return{
        courseLessons,
        loading,
        error
    }
}
export default compose(
    withCourseService(),
    connect(mapStateToProps,mapDispatchToProps)
)(LessonForm);