import React from 'react';
import './styles/App.css';
import {Route, Switch} from 'react-router-dom'
import MainLayout from "./layout/MainLayout";
import FormulaPage from "./pages/FormulaPage";
import GamePage from "./pages/GamePage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <MainLayout>
          <Switch>
              <Route path="/formula" exact component={FormulaPage} />
              <Route path="/game" component={GamePage} />
              <Route path="/test" component={TestPage} />
          </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
