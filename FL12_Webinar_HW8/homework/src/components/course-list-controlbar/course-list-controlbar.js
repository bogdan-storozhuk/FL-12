import React from 'react';
import CourseListSearchbar from '../course-list-searchbar/';
import CourseListAddButton from '../course-list-add-button';
import './course-list-controlbar.css';

const CourseListControlbar = () => {
    return (<div className='course-list-controlbar'>
        <CourseListSearchbar/>
        <CourseListAddButton/>
    </div>);  
}
export default CourseListControlbar;