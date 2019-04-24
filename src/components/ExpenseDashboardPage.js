import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ConnectedExpenseListFilters from './ExpenseListFilters';

const ExpensesDashboardPage  = () => (
    <div>
      <ConnectedExpenseListFilters />
      <ConnectedExpenseList />
    </div>  
  );

export default ExpensesDashboardPage;