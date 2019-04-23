import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters} from '../fixtures/filters';

let setStartDate ,setEndDate, setTextFilter, sortByAmmount, sortByDate, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn(); 
    setTextFilter = jest.fn(); 
    sortByAmmount = jest.fn(); 
    sortByDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
            sortByAmmount={sortByAmmount}
            sortByDate={sortByDate}
        />)
});


test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFiltes with alternate filter correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});
test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by ammount', () => {
    const value = 'ammount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const startDate = moment(0).add(1,'year')
    const endDate = moment(0).add(4,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should handle date focus change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})