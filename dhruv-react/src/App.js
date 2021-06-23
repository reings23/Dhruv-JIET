import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";

//class App extends React.Component {
 // state = {
 //   user: {},
 // };
 const App = () => {
   const [user, setUser] = useState({});

   useEffect(() => {
    let savedUser = localStorage.getItem("user");
    if (savedUser && Object.keys(user).length === 0) {
    setUser(JSON.parse(savedUser).user);
    }
  },[user]);


  //componentDidMount() {
   // let savedUser = localStorage.getItem("user");
    //if (savedUser && Object.keys(this.state.user).length === 0) {
   //   this.setUserState(JSON.parse(savedUser).user);
   // }
  //}

  //setUserState = (user) => {
    //this.setState({ user: user });
  //};
  //render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path={"/"} exact>
            <Homepage user = {user}/>
            </Route>
            <Route path={"/login"}>
              <Login setUserState={setUser} />
            </Route>
            <Route path={"/signup"}>
              <SignUp setUserState={setUser} />
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
  };


export default App;
