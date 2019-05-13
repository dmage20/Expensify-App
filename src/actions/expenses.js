import uuid from 'uuid';
// import { firebase } from '../firebase/firebase'
import  database from '../firebase/firebase';
// Add Expense
export const addExpnese = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            ammount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {description, note, ammount, createdAt}
        return database.ref('expenses').push(expense).then((ref) =>{
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
// Remove Expense
export const removeExpense = ({ id }= {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})