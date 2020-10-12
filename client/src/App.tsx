import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import MainLayout from "./components/layout/MainLayout";
import FormulaComponent from "./components/formula/FormulaComponent";
import Game from "./components/game/Game";
import Test from "./components/test/Test";

function App() {
  return (
    <div className="App">
      <MainLayout>
          <Switch>
              <Route path="/formula" exact component={FormulaComponent} />
              <Route path="/game" component={Game} />
              <Route path="/test" component={Test} />
          </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
