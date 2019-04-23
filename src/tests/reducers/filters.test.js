import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer( undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to ammount', () => {
    const state = filtersReducer( undefined, {type: 'SORT_BY', sortBy: 'ammount'})
    expect(state.sortBy).toBe('ammount')
})

test('should set sortBy to date', () => {
   const currentState = {
       text: '',
       sortBy: 'ammount',
       startDate: undefined,
       endDate: undefined
   }

   const state = filtersReducer( currentState, {type: 'SORT_BY', sortBy: 'date'})
   expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = "this is my filter"
    const action = {
        type: 'EDIT_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, {type: 'EDIT_TEXT_FILTER', text: text})
    expect(state.text).toBe(text)
})

test('should set startDate filter', () => {
    const startDate = moment()
    const action = {
    type: 'SET_START_DATE',
    startDate: startDate
}
    const state = filtersReducer( undefined, action)
    expect(state.startDate).toBe(startDate)
})

test('should set endDate filter', () => {
    const endDate = moment()
    const action = {
    type: 'SET_END_DATE',
    endDate
}
    const state = filtersReducer( undefined, action)
    expect(state.endDate).toBe(endDate)
})