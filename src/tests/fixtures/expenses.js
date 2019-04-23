import moment from 'moment'
// Expenses Array
export default [{
    id: '1',
    description: 'Gum',
    note: '',
    ammount: 195,
    createdAt: 0 
},
{
    id: '2',
    description: 'Rent',
    note: '',
    ammount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()  
},
{
    id: '3',
    description: 'Credit Card',
    note: '',
    ammount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]