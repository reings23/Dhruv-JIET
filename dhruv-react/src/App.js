import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "./Components/SignUp";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path={"/"} exact>
              <h1>This is HomePage</h1>
            </Route>
            <Route path={"/login"} >
              <h1>This is Login</h1>
            </Route>
            <Route path={"/signup"} >
              <SignUp />
            </Route>
            <Route path={"/contact-us"}>
              <h1>This is Contact-us</h1>
            </Route>
            <Route path={"/**"} >
              <Redirect to={"/"}></Redirect>
            </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
