const initialState = {
    courseLessons: [],
    loading: true,
    error: null,
    term: ''
};

const updateCourseLessons = (lessons, item, idx) => {
    if (idx === -1) {
        return [
            ...lessons,
            item
        ];
    }
    return [...lessons.slice(0, idx),
        item,
        ...lessons.slice(idx + 1)
    ];
};
const updateCourseLesson=(lesson,item)=>{
    if (item) {
        return {
            ...item,
            topic: lesson.topic,
            date: lesson.date,
            lecturer: lesson.lecturer,
            duration: lesson.duration
        };
    } else {
        return lesson;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COURSE_LESSONS_REQUEST':
            return {
                ...state,
                courseLessons: [],
                    loading: true,
                    error: null
            };
        case 'FETCH_COURSE_LESSONS_SUCCESS':
            return {
                ...state,
                courseLessons: action.payload,
                    loading: false,
                    error: null
            };
        case 'FETCH_COURSE_LESSONS_FAILURE':
            return {
                ...state,
                courseLessons: [],
                    loading: false,
                    error: action.payload
            };
        case 'LESSON_ADDED_TO_COURSE':
            const lesson=action.payload;
            const itemIndex = state.courseLessons.findIndex(({id}) => id === lesson.id);
            const item = state.courseLessons[itemIndex];
            const newItem=updateCourseLesson(lesson,item)
            return {
                ...state,
                courseLessons: updateCourseLessons(state.courseLessons, newItem, itemIndex)
            };

        case 'LESSON_REMOVED_FROM_COURSE':
            return {
                ...state,
                courseLessons: [...state.courseLessons.filter(item => item.id !== action.payload)]
            };
        case 'SEARCH_TERM_UPDATED':
            return {
                ...state,
                term: action.payload
            };
        default:
            return state;
    }
}
export default reducer;