import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ErrorPage from '../../components/NotFoundPage';

test('should render the not found page correctly', () =>{
    const wrapper = shallow(<ErrorPage />)
    expect(toJson(wrapper)).toMatchSnapshot();
})
