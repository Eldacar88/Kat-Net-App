//Components
import Home from "../../components/home/Home";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Angebot from "../../components/SeekAndFind/Angebot";
import Gesuche from "../../components/SeekAndFind/Gesuche";
import Feedoverview from "../../components/feed/Feedoverview";
import Feedoffer from "../../components/feed/Feedoffer";
import Feedrequest from "../../components/feed/Feedrequest";

import Profile from "../../components/profile/Profile";
import { useState, useEffect } from 'react'

//BrowserRouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//CSS
import "../scss/App.css";
import "../scss/index.css";

function App() {
  const [offer, setOffer] = useState([]);
  const [request, setRequest] = useState([]);

  return (
    <div className="App">
      <Router>
        <Home title={"Willkommen auf der Kat-Net-App"}/>
        <Routes>
          <Route path="/"
           element={<Feedoverview
           offer={offer}
           setOffer={setOffer}
           request={request}
           setRequest={setRequest}/>}/>
          
          <Route path="/Login" element={
            <Login emailLabel={"Email"} 
            emailPlaceholder={"Email Adress"} 
            passwordLabel={"Password"} 
            passwordPlaceholder={"Password"} 
            submitButtonText={"Submit"}
            registerButtonText={"Register Now"}
            />
          }/>
          
          <Route path="/Register" element={
            <Register
            firstNameLabel={"First Name"}
            firstNamePlaceholder={"First Name"}
            lastNameLabel={"Last Name"}
            lastNamePlaceholder={"Last Name"}
            emailLabel={"Email"}
            emailPlaceholder={"Email Adress"}
            passwordLabel={"Password"}
            passwordPlaceholder={"Password"}
            submitButtonText={"Register"}
            backToLoginText={"Back to Login"}
            />
          }/>
          
          <Route path="/Angebot" element={<Angebot offer={offer} setOffer={setOffer}/>}/>
          
          <Route path="/Gesuch" element={<Gesuche request={request} setRequest={setRequest}/>}/>

          <Route path="/Profile" element={<Profile
              />}/>
          
          </Routes>
    </Router>
    </div>
  );
}

export default App;
