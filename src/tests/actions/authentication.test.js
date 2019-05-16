import {login, logout} from '../../actions/authentication';

test('should generate a login action objet', ()=>{
    const uid = '123abc'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should generate a logout action object', ()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})