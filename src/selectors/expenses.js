import moment from 'moment';

export default (expenses, { text, sortBy, endDate, startDate }) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate? createdAtMoment.isSameOrBefore(endDate, 'day') : true;

        return textMatch && startDateMatch && endDateMatch
    }).sort(( a, b )=> {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'ammount'){
            return a.ammount < b.ammount ? 1 : -1;
        }
    })
};

// export default getVisibleExpenses;