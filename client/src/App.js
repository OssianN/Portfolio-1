import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/homePage/HomeIndex';
import Todo from './components/todo/todoIndex';
import Wine from './components/myWine/wineIndex';
import GuestBook from './components/guest-book/GuestBook';

const App = () => {
  const [navStyle, setNavStyle] = useState('homeNav');
  
  return (
    <Router>
      <div className="App">
        <Nav navStyle={navStyle} setNavStyle={setNavStyle} />
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/todo" component={Todo} />
          <Route path="/wine" component={Wine} />
          <Route path="/guestbook" component={GuestBook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
