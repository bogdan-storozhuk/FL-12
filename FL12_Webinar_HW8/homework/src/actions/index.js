
const courseLessonsLoaded = (newCourseLessons) => ({
    type: 'FETCH_COURSE_LESSONS_SUCCESS',
    payload: newCourseLessons
});

const courseLessonsRequested=()=>{
    return {
        type:'FETCH_COURSE_LESSONS_REQUEST'
    }
}

const courseLessonsError=(error)=>{
    return{
        type:'FETCH_COURSE_LESSONS_FAILURE',
        payload:error
    }
}

const lessonAddedToCourse=(lesson)=>{
    return{
        type:'LESSON_ADDED_TO_COURSE',
        payload:lesson
    }
}

const lessonRemovedFromCourse=(id)=>{
    return {
        type:'LESSON_REMOVED_FROM_COURSE',
        payload:id
    }
}

const searchTermUpdated=(term)=>{
    return {
        type:'SEARCH_TERM_UPDATED',
        payload:term
    }
}

const fetchCourseLessons=(dispatch,courseService)=>()=>{
    dispatch(courseLessonsRequested());
    courseService.getCourses()
    .then((data)=>dispatch(courseLessonsLoaded(data)))
    .catch((error)=>dispatch(courseLessonsError(error)));
}

export {
    fetchCourseLessons,
    lessonAddedToCourse,
    lessonRemovedFromCourse,
    searchTermUpdated
};