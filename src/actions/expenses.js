import uuid from 'uuid';
// Add Expense
export const addExpnese = (
    {
        description = '',
        note = '',
        ammount = 0,
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        ammount,
        createdAt
    }
});
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