import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/homePage/HomeIndex';
import Todo from './components/todo/todoIndex';
import Wine from './components/myWine/wineIndex';

const App = () => {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/todo" component={Todo}/>
            <Route path="/wine" component={Wine}/>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
