import React from 'react';
import Intro from './components/Intro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CVSteapper from './components/CVStepper';
import Result from './components/Result';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/steps" component={CVSteapper} />
        <Route path="/result" component={Result} />
        <Route path="/" component={Intro} />
      </Switch>
    </Router>
  );
};

export default App;