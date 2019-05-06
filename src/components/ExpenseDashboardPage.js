import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ConnectedExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpensesDashboardPage  = () => (
    <div>
      <ExpensesSummary></ExpensesSummary>
      <ConnectedExpenseListFilters />
      <ConnectedExpenseList />
    </div>  
  );

export default ExpensesDashboardPage;