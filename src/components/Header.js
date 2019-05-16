
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/authentication';

export const Header = ({startLogout}) => (
    <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
        <NavLink activeClassName="is-active" to="/dashboard" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>,
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </div>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)