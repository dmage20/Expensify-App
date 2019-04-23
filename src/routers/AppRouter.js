
import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Header from '../components/Header';
import ExpensesDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditEpensesPage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/NotFoundPage';

  const AppRouter = () =>(
    <BrowserRouter>
          <div>
              <Header/>
              <Switch>
                  <Route path="/" component={ExpensesDashboardPage} exact={true}/>
                  <Route path="/create" component={AddExpensePage} />
                  <Route path="/edit/:id" component={EditEpensesPage} />
                  <Route path="/help" component={HelpPage} />
                  <Route component={ErrorPage} />
              </Switch>
          </div>
  
      </BrowserRouter>
  );

  export default AppRouter;