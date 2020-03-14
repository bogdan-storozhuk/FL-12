import React, {Component} from 'react';
import {lessonAddedToCourse} from '../../actions';
import {connect} from 'react-redux';
import FormHeader from '../form-header';
import FormField from '../form-field';
import FormControls from '../form-controls';
import './lesson-form.css';

class LessonForm extends Component {
    
    state={
        id:'_' + Math.random().toString(36).substr(2, 9),
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
    componentDidMount(){
        let {itemId} =this.props.itemId;
        if(itemId){
            itemId=Number(itemId);
            const lesson=this.props.courseLessons.filter(item=>item.id===itemId);
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
        console.log(this.state);
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

const mapDispatchToProps=(dispatch)=>{
    return{
        onItemAdded:(lesson)=>{dispatch(lessonAddedToCourse(lesson))}
    }
}
const mapStateToProps=({courseLessons})=>{
    return{
        courseLessons
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LessonForm);