//Components

import Gesuche from "../../components/SeekAndFind/Gesuche";
import Angebot from "../../components/SeekAndFind/Angebot";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Profile from "../../components/profile/Profile";
import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/feed/Feed";

//BrowserRouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//CSS
import "../scss/App.css";
import "../scss/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/Gesuch" element={<Gesuche />} />
          <Route path="/Angebot" element={<Angebot />} />
          <Route
            path="/Login"
            element={
              <Login
                emailLabel={"Email"}
                emailPlaceholder={"Email Adress"}
                passwordLabel={"Password"}
                passwordPlaceholder={"Password"}
                submitButtonText={"Submit"}
              />
            }
          />
          <Route
            path="/Register"
            element={
              <Register
                firstNameLabel={"First Name"}
                firstNamePlaceholder={"First Name"}
                lastNameLabel={"Last Name"}
                lastNamePlaceholder={"Last Name"}
                emailLabel={"Email"}
                emailPlaceholder={"Email Adress"}
                passwordLabel={"Password"}
                passwordPlaceholder={"Password"}
                submitButtonText={"Submit"}
              />
            }
          />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
