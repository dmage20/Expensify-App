import { startAddExpense, addExpnese, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureReduxMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureReduxMockStore([thunk])
const uid = 'thisisauid'
const deafaultAuthState = {auth: {uid}}

beforeEach((done) =>{
    const expensesData = {}
    expenses.forEach(({id,description,ammount,note,createdAt}) =>{
        expensesData[id] = {description,ammount,note,createdAt}
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})
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
    const store = createMockStore(deafaultAuthState)
    const expenseData = {
        description: 'Mouse',
        ammount: 3000,
        note: 'this is a note',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        const uid = 'thisisauid'
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with default data to database and store', (done) => {
    const store = createMockStore(deafaultAuthState)
    const expenseDefault = {
        description: '',
        ammount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        const uid = 'thisisauid'
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});

test('should set expense action object with data', ()=>{
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(deafaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
    done();
    })
})

test('should remove an expense from firebase', (done)=>{
    const store = createMockStore({auth: {uid}});
    const id = expenses[1].id
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

test('should edit an expense in firebase', (done) => {
    const store = createMockStore(deafaultAuthState);
    const id = expenses[0].id;
    const uid = 'thisisauid'
    const updates = {
        ammount: 9900,
        description: 'this is an edit'
    }
    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val().ammount).toBe(updates.ammount);
        done();
    })
})