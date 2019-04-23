import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT}'})
    expect(state).toEqual([])
})

test('should remove an expense by id', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer( expenses, action)
    expect(state).toEqual([expenses[1], expenses[2]])
})

test('should not remove an expense when id is not found', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer( expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an new expense to epenses', () =>{
    const expense = {
        id: '4',
        description: 'Gas',
        note: '',
        ammount: 1200,
        createdAt: 0 
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an epense using id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id, 
        updates: { 
            ammount: 999
        }
    }
    const state = expensesReducer(expenses , action) 
    expect(state[0].ammount).toBe(action.updates.ammount)
})

test('should not edit an expense if id is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1', 
        updates: { 
            ammount: 999
        }
    }
    const state = expensesReducer(expenses , action) 
    expect(state).toEqual(expenses)
})