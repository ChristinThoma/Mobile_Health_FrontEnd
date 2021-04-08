import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route, Redirect } from "react-router-dom";
import AppState from './context/app/AppState';
// import TherapistContext from "../src/context/TherapistsContext"; 
// Import all Componentes
// import TeamPage from "./Components/Team";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage";
import TherapistList from "./Components/TherapistList";
import TherapistCard from "./Components/TherapistCard";
import Login from "./Components/Login/Login"

//  import RegisterPage from "./Components/RegisterPage/RegisterPage";
import RegisterPage2 from "./Components/RegisterPage2/RegisterPage2";
//  import Api from "./Api";
import {login} from "./utils/auth"


export default function App() {
  
const [credentials, setCredentials]= useState();


const handleSetCredentials = (e) => {
  setCredentials((prevCredentials) => ({
    ...prevCredentials,
    [e.target.name]: e.target.value,
  }))
}

const handleAuthentication = async()=> {
  await login(credentials)
}



  return (
    <AppState>
      <Navbar />
        <Switch>
          <Route path="/therapistList">
            <TherapistList />
          </Route>
          <Route path="/therapistCard">
            <TherapistCard />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}

           <Route path="/TherapistCard">
          <TherapistCard />
        </Route> 

          <Route path="/registration">
            <RegisterPage2 />
          </Route>
          <Route path="/auth">
            <Login onAuth={handleAuthentication} onSetCredentials={handleSetCredentials}/>
          </Route>
          <Route path="/">
            <Redirect to="auth"/>
          </Route>

          {/* <Route path="/registration">
         <RegisterPage/>
        </Route> */}

          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      <Footer />
    </AppState>
    
  );
}
