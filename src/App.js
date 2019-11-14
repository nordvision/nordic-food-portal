import React from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { Menu } from './components/Menu';
import Home from './pages/Home';
import Test from './pages/Test';
import About from './pages/About';
import Seasons from './pages/Seasons';
import FoodStories from './pages/FoodStories';
import Search from './pages/Search';
function App() {

  return (
    <div className="App">
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/seasons">
                    <Seasons/>
                </Route>
                <Route path="/stories">
                    <FoodStories/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route exact path="/test">
                    <Test />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
