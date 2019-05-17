
import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';
import ExpensesDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditEpensesPage from '../components/EditExpensePage';
import ErrorPage from '../components/NotFoundPage';
import AuthenticationPage  from '../components/AuthenticationPage';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

  const AppRouter = () =>(
    <Router history={history}>
          <div>
              <Switch>
                  <PublicRoute path="/" component={AuthenticationPage} exact={true}/>
                  <PrivateRoute path="/dashboard" component={ExpensesDashboardPage} />
                  <PrivateRoute path="/create" component={AddExpensePage} />
                  <PrivateRoute path="/edit/:id" component={EditEpensesPage} />
                  <Route component={ErrorPage} />
              </Switch>
          </div>
  
      </Router>
  );

  export default AppRouter;