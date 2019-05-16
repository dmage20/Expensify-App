
import React from 'react';
import { shallow } from 'enzyme';
import {AuthenticationPage} from '../../components/AuthenticationPage';

test('should call startLogin on button click',() => {
    const startLogin = jest.fn()
    const wrapper = shallow(<AuthenticationPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})

test('should render login page correctly',() =>{
    const wrapper = shallow(<AuthenticationPage />);
    expect(wrapper).toMatchSnapshot();
})