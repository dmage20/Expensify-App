import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses'
import toJson from 'enzyme-to-json'
import {AddExpensePage} from '../../components/AddExpensePage'

let startAddExpense, history, wrapper;
beforeEach(()=>{
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)

})
test('should render add Expense page correctly',() =>{
    expect(toJson(wrapper)).toMatchSnapshot();
})

test('should handle on submit',() =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})