import React, { Component } from 'react';
import Home from './Components/Home.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Recipe from './Components/Recipe.jsx';
import Directory from './Components/Directory.jsx';
import Splash from './Components/Splash.jsx';




import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/AboutMe" component={AboutMe} />
              <Route exact path="/Recipe" component={Recipe} />
              <Route exact path="/Directory" component={Directory} />


            </Switch>
          </div>
        </Router>
    );
  }
}
export default App;
