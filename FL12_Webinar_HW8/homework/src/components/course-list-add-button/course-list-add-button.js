import React from 'react';
import {Link} from 'react-router-dom';
import './course-list-add-button.css'

const CourseListAddButton=()=>{
    return (<Link to='/add-edit-course'><button className='course-list-add-button'>Add lesson</button></Link>)
}
export default CourseListAddButton;