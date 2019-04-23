import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import ExpensesDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpensesDashboardPage correctly', () => {
    const wrapper = shallow(<ExpensesDashboardPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});