import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;