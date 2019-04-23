// setTextFilter
export const setTextFilter = (text = '') => ({
    type: 'EDIT_TEXT_FILTER',
    text
});
// Set Sort By
export const sortByAmmount = () => ({
    type: 'SORT_BY',
    sortBy: 'ammount'
})
export const sortByDate = () => ({
    type: 'SORT_BY',
    sortBy: 'date'
})
// Set Start Date
export const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
})
// Set End Date
export const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
})