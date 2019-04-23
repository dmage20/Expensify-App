import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            ammount: props.expense? (props.expense.ammount / 100 ).toString() : '',
            createdAt: props.expense? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
        console.log(props)
    }
    onDescriptionChange = (e) =>{
        const description = e.target.value
        this.setState(()=>({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(()=>({note}))
    }
    onAmmountChange = (e) =>{
        const ammount = e.target.value
        if (!ammount || ammount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ammount}))
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({createdAt}))
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused: focused}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.ammount || !this.state.description){
            this.setState(() =>({ error: 'Please fill out description and ammount fields' }))
        }else {
            this.setState(() =>({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                ammount: parseFloat(this.state.ammount,10)*100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return (
            <div>
                {this.state.error  && <p>{this.state.error}</p>}
                <form
                    onSubmit={this.onSubmit}
                >
                    <input 
                        type="text" 
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Ammount"
                        value={this.state.ammount}
                        onChange={this.onAmmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={ () => false }
                    />
                    <textarea 
                        placeholder="Add a note for the expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
