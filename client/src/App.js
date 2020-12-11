import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/homePage/HomeIndex';
import Todo from './components/todo/todoIndex';
import Wine from './components/myWine/wineIndex';

const App = () => {
  const [background, setBackground] = useState({
    backgroundPositionX: 0,
    backgroundPositionY: 0
  });
  const [navStyle, setNavStyle] = useState('navList1');

  const moveBackground = (e) => {
    setBackground({
      backgroundPositionX: `${-e.clientX * .1}px`,
      backgroundPositionY: `${-e.clientY * .1}px`,
    });
  };

  return (
    <Router>
      <div className="App" onMouseMove={moveBackground} >
        <Nav navStyle={navStyle} setNavStyle={setNavStyle} />
        <Switch>
          <Route path="/" exact >
            <Home background={background} />
          </Route>
          <Route path="/todo" component={Todo}/>
          <Route path="/wine" component={Wine}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
