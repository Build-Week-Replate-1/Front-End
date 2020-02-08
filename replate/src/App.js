import React from "react"
// import logo from './logo.svg';
import { Route } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import MainBody from "./components/MainBody"
import Login from "./components/Login/Login"
import businessLogin from "./components/Login/businessLogin"
import BusinessRegister from "./components/Registration/BusinessRegistration"
import VolunteerRegister from "./components/Registration/VolunteerRegistration"
import Dashboard from "./components/Dashboard/Dashboard"
import BusinessDonate from "./components/Dashboard/BusinessDonate"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={MainBody} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/VolunteerRegister" component={VolunteerRegister} />
      <Route exact path="/BusinessRegister" component={BusinessRegister} />
      <Route exact path="/businesslogin" component={businessLogin} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/BusinessDonate" component={BusinessDonate} />
    </div>
  )
}

export default App
