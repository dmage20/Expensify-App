


export default (expenses) =>   {
    return expenses.map((expense) => expense.ammount).reduce((total, value)=> total + value,0)
}