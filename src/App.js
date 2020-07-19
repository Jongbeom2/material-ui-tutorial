import React from 'react';
import './App.css';
import Home from './routes/Home';
import ColorThemeTutorial from './routes/ColorThemeTutorial';
import StepperTutorial from './routes/StepperTutorial';
import IconTutorial from  './routes/IconTutorial';
import TablTutorial from './routes/TabTutorial';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/colorTheme">
          <ColorThemeTutorial />
        </Route>
        <Route exact path="/stepper">
          <StepperTutorial />
        </Route>
        <Route exact path="/icon">
          <IconTutorial />
        </Route>
        <Route exact path="/tab">
          <TablTutorial />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
