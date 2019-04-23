import moment from 'moment';

// Default State for Filters Reducer
const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month')
};

// Filters Reducer
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'EDIT_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// export default filtersReducer;