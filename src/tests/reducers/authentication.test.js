import authenticationReducer from '../../reducers/authentication';

test('should set uid for login', ()=>{
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    }
    const state = authenticationReducer({}, action)
    expect(state.uid).toEqual(action.uid)

})

test('should clear uid for logout', ()=>{
    const action = {
        type: 'LOGOUT'
    }
    const state = authenticationReducer({ uid: 'abc123' },action)
    expect(state).toEqual({});
})