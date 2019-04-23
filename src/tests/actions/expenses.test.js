import { addExpnese, editExpense, removeExpense } from '../../actions/expenses';


// test the expense remove action
test('should return an object with type and id keys',() => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

// test the expense edit action
test('should return an object with type and updates keys', () => {
    const action = editExpense('abc123', {note: 'this is a note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'this is a note'
        }
    })
})

// test the expense create action
test('should return an expense object with all the input criteria', () =>{
    const expenseData = {
        description: 'rent',
        note: 'this is last months rent',
        ammount: 12300,
        createdAt: 1000,
    }
    const action = addExpnese(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }

    })
})

// test the expense create action when no data is passed
test('should return an object with default values for expense', () =>{

    const action = addExpnese();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            ammount: 0,
            createdAt: 0
        }
    })
})