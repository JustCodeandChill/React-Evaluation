import React from "react";
import Dummy1 from "./Dumm1";
import Dummy2 from "./Dummy2";
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//const App = () => {
//  return (
//    <div className="app">
//        <h1>This is app component</h1>
//      <Router>

//          <Link to="/dum1">Dummy1</Link>
//          <Link to="/dum2">Dummy2</Link>

//          <Route exact path="/" component={App} />
//          <Route exact path="/dum1" component={Dummy1} />
//          <Route exact path="/dum2" component={Dummy2} />

//      </Router>
//    </div>
//  );
//};

const Home = () => <div>Home</div>;

const About = () => <div>About</div>;

const App = () => (
  <div className="app">
      <p>Hi there</p>
      <p>SAD</p>
      <Button></Button>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  </div>
);

export default App;
