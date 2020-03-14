const initialState = {
    courseLessons: [],
    loading: true,
    error: null,
    term: ''
};
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
            return {
                ...state,
                courseLessons: [
                    ...state.courseLessons,
                    action.payload
                ]
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