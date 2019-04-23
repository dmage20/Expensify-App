import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render an expense list item', () =>{
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
})