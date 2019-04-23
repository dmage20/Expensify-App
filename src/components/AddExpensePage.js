import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpnese} from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpnese(expense);
        this.props.history.push('/')
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) =>( {
    addExpnese: (expense) => dispatch(addExpnese(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage);