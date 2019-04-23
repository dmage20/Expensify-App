import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'

    // test the selection of expenses based on text 
test('should filter expenses by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses( expenses, filters )
    expect(result).toEqual([ expenses[2], expenses[1] ])
})

    // test the selection of expenses based on a start date
test('should filter expenses by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined        
    }
    
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0]])
})

test('should filter expenses by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)           
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort expenses by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined           
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1]])
})

test('', () => {
    const filters = {
        text: '',
        sortBy: 'ammount',
        startDate: undefined,
        endDate: undefined           
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})