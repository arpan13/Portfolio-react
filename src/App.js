import React from "react";

import NavBar from "./components/NavBar/NavBar";
import Landing from "./pages/LandingPage/Landing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Education from "./components/Education/Education";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/education" exact>
            <NavBar />
            <Education />
          </Route>
          <Route path="/">
            <NavBar />
            <Landing />
          </Route>
          {/* <Route path="/about">
          <About />
        </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
