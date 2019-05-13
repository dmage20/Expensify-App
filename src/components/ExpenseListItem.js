import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ ammount , description, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
            <p> 
                {numeral(ammount/100).format('$0,0.00')} 
                -
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        
    </div>
);


export default ExpenseListItem;