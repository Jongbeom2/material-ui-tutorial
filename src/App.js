import React from 'react';
import './App.css';
import Home from './routes/Home';
import ColorThemeTutorial from './routes/ColorThemeTutorial';
import StepperTutorial from './routes/StepperTutorial';
import IconTutorial from  './routes/IconTutorial';
import TablTutorial from './routes/TabTutorial';
import GridTutorial1 from './routes/GridTutorial1';
import GridTutorial2 from './routes/GridTutorial2';
import StyleTutorial1 from './routes/StyleTutorial1';
import StyleTutorial2 from './routes/StyleTutorial2';
import StyleTutorial3 from './routes/StyleTutorial3';
import BoxTutorial from './routes/BoxTutorial';
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
        <Route exact path="/grid1">
          <GridTutorial1 />
        </Route>
        <Route exact path="/grid2">
          <GridTutorial2 />
        </Route>
        <Route exact path="/style1">
          <StyleTutorial1 />
        </Route>
        <Route exact path="/style2">
          <StyleTutorial2 />
        </Route>
        <Route exact path="/style3">
          <StyleTutorial3 />
        </Route>
        <Route exact path="/box">
          <BoxTutorial />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
