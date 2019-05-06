import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';

test('should display one expense', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={195}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should display multiple expenses', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={12} expensesTotal={195900}/>)
    expect(wrapper).toMatchSnapshot()
})