import React,{Fragment} from 'react';
import CourseList from '../course-list/';
import CourseListControlbar from '../course-list-controlbar';

const CoursePage=()=>{
    return (<Fragment>
        <CourseListControlbar/>
        <CourseList/>
        </Fragment>)
}

export default CoursePage;