//Components

// import Gesuche from '../Components/SeekAndFind/Gesuche'
// import Angebot from '../Components/SeekAndFind/Angebot'
// import Login from '../../components/login/login'
import Gesuche from '../../components/SeekAndFind/Gesuche'
import Angebot from '../../components/SeekAndFind/Angebot'
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'
import Profile from '../../components/profile/Profile'


//CSS
import '../scss/App.css'
import '../scss/index.css'

function App() {

  return (
    <div className="App">

      <Gesuche/>
      <Angebot/>
      <Login emailLabel={"Email"} emailPlaceholder={"Email Adress"} passwordLabel={"Password"} passwordPlaceholder={"Password"} submitButtonText={"Submit"}/>
      <Register firstNameLabel={"First Name"} firstNamePlaceholder={"First Name"} lastNameLabel={"Last Name"} lastNamePlaceholder={"Last Name"} emailLabel={"Email"} emailPlaceholder={"Email Adress"} passwordLabel={"Password"} passwordPlaceholder={"Password"} submitButtonText={"Submit"}/>
      <Profile />
    </div>
  );
}

export default App
