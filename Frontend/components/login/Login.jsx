import "./login.css"
//import Submitbutton from "../button/submittbutton";
import Submitbutton from "../Generic components/button/Submittbutton";
import Email from "../email/Email";
import Password from "../password/Password";
import { Link } from "react-router-dom";

const Login = ({emailLabel, emailPlaceholder, passwordLabel, passwordPlaceholder, submitButtonText, registerButtonText}) => {

    return(

        <div className="login-container">
            <form>
                <h1>Login</h1>
                <Email emailLabel={emailLabel} emailPlaceholder={emailPlaceholder}/>
                <Password passwordLabel={passwordLabel} passwordPlaceholder={passwordPlaceholder}/>
                
                <Link to={"/Register"}><Submitbutton submitButtonText={registerButtonText}/></Link>
                
                <Link to={"/Profile"}><Submitbutton submitButtonText={submitButtonText}/></Link>
                
            </form>
        </div>
        
    )

}

export default Login;