import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";

class App extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    let savedUser = localStorage.getItem("user");
    if (savedUser && Object.keys(this.state.user).length === 0) {
      this.setUserState(JSON.parse(savedUser).user);
    }
  }

  setUserState = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path={"/"} exact>
            <Homepage
                firstName={this.state.user.firstName}
                lastName={this.state.user.lastName}
              />
            </Route>
            <Route path={"/login"}>
              <Login setUserState={this.setUserState} />
            </Route>
            <Route path={"/signup"}>
              <SignUp setUserState={this.setUserState} />
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
