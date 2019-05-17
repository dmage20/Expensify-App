import uuid from 'uuid';
import  database from '../firebase/firebase';
// import { firebase } from '../firebase/firebase'
// Add Expense
export const addExpnese = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            ammount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {description, note, ammount, createdAt}
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) =>{
            dispatch(addExpnese({
                id: ref.key,
                ...expense
            }));
        })
    };
};
// Edit Expense
export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) =>{
    return (dispatch,getState) =>{
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates))
        })
    }
}
// Remove Expense
export const removeExpense = ({ id }= {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({id = {}}) =>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}))
        })
    }
    
}
// Set Expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
       return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) =>{
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpenses(expenses))
        })
    };
};

// export const startAddExpense = (expenseData = {}) => {
//     return (dispatch) => {
//         const {
//             description = '',
//             note = '',
//             ammount = 0,
//             createdAt = 0
//         } = expenseData;
//         const expense = {description, note, ammount, createdAt}
//         return database.ref('expenses').push(expense).then((ref) =>{
//             dispatch(addExpnese({
//                 id: ref.key,
//                 ...expense
//             }));
//         })
//     };
// };