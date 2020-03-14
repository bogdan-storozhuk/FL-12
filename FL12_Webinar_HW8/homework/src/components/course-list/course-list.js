import React,{Component} from 'react';
import {connect} from 'react-redux';

import CourseListItem from '../course-list-item/';
import Spinner from '../spinner/'
import {withCourseService} from '../hoc';
import {fetchCourseLessons} from '../../actions';
import {compose} from '../../utils';
import './course-list.css';
import ErrorIndicator from '../error-indicator';

const CourseList=({courseLessons})=>{
    return(
        <ul className='course-list'>
            {
                courseLessons.map((courseLesson)=>{
                    return <li key={courseLesson.id}><CourseListItem courseLesson={courseLesson}></CourseListItem></li>
                })
            }
        </ul>
    );
}

class CourseListContainer extends Component{

    componentDidMount(){
        const {courseLessons}=this.props;
        if(courseLessons.length===0){
        this.props.fetchCourseLessons()
        }
    }
    search(items,term){
        if(term.length===0){
            return items;
        }
       return items.filter((item)=>{
            return item.topic.toLowerCase().indexOf(term) > -1;
        });
    }

    render(){
        const {courseLessons,loading,error,term}=this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>;
        } 
        const visibleItems=this.search(courseLessons,term);
        return <CourseList courseLessons={visibleItems}/>
    }
}

const mapStateToProps=({courseLessons,loading,error,term})=>{
    return { courseLessons,loading,error,term };
}

const mapDispatchToProps=(dispatch,{courseService})=>{
    return {
        fetchCourseLessons:fetchCourseLessons(dispatch,courseService)
    }
};
export default compose(
    withCourseService(),
    connect(mapStateToProps,mapDispatchToProps)
)(CourseListContainer);