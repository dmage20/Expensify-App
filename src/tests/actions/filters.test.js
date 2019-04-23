import moment from 'moment';
import { setEndDate, 
    setStartDate, 
    sortByDate, 
    sortByAmmount, 
    setTextFilter } from '../../actions/filters';

// test setEndDate filter
test('should return an objet with type SET_END_DATE and an endDate', () =>{
    const filter = setEndDate(moment(0))
    expect(filter).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
// test setStartDate filter
test('should return an objet with type SET_START_DATE and an startDate', () =>{
    const filter = setStartDate(moment(0))
    expect(filter).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

// test sortByDate filter
test('this should return an object with type SORT_BY',() =>{
    const filter = sortByDate()
    expect(filter).toEqual({
        type: 'SORT_BY',
        sortBy: 'date'
    })
})

// test sortByAmmount filter
test('this should return an object with type SORT_BY',() =>{
    const filter = sortByAmmount()
    expect(filter).toEqual({
        type: 'SORT_BY',
        sortBy: 'ammount'
    })
})

// test filter by text
test('should return an object with the text filter default value',() => {
    const filter = setTextFilter()
    expect(filter).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text: ''
    })
})

test('should return an object with the text filter provided by the user',() => {
    const filter = setTextFilter('bills')
    expect(filter).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text: 'bills'
    })
})