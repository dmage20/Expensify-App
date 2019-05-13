import { startAddExpense, addExpnese, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureReduxMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureReduxMockStore([thunk])


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
    const action = addExpnese(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]

    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        ammount: 3000,
        note: 'this is a note',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with default data to database and store', (done) => {
    const store = createMockStore({})
    const expenseDefault = {
        description: '',
        ammount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});

// test the expense create action when no data is passed
// test('should return an object with default values for expense', () =>{

//     const action = addExpnese();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             ammount: 0,
//             createdAt: 0
//         }
//     })
// })