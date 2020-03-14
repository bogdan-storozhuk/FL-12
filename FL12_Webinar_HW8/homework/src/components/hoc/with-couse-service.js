import React from 'react';
import {
    CourseServiceConsumer
} from '../course-service-context'; 

const withCourseService = () => (Wrapped) => {
    return (props) => {
        return (
            <CourseServiceConsumer>
                {(courseService)=>{
                   return( <Wrapped {...props} courseService={courseService}/>);
                }}
            </CourseServiceConsumer>
        );
    }
}
export default withCourseService;