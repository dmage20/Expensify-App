
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpnese} from './actions/expenses'
import {setTextFilter} from './actions/filters';
import getVisibleEpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpnese({ammount:2710, description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpnese({ammount:1670, description: 'Water bill', createdAt: 2000}))
store.dispatch(addExpnese({ammount:500, description: 'hamburger', createdAt: -3000}))
// store.dispatch(setTextFilter('bill'));
const state = store.getState();
const visibleExpenses = getVisibleEpenses(state.expenses, state.filters)
// console.log(visibleExpenses);
// console.log('test')

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render( jsx, document.getElementById('app'))



