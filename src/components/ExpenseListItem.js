import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({ ammount , description, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
            <p>$ {ammount} date: {createdAt}</p>
        
    </div>
);


export default ExpenseListItem;