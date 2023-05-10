import "./register.css"

import LastName from "../names/LastName";
import FirstName from "../names/First";
import Email from "../email/Email";
import Password from "../password/Password";
import Submitbutton from "../Generic components/button/Submittbutton";
import { Link } from "react-router-dom";

const Register = ({firstNameLabel, firstNamePlaceholder, lastNameLabel, lastNamePlaceholder, emailLabel, emailPlaceholder, passwordLabel, passwordPlaceholder, submitButtonText, backToLoginText}) => {
    return(
        <div className="register-container">
            <form>
                <h1>Register</h1>
                <div className="subcontainer">
                    <FirstName firstNameLabel={firstNameLabel} firstNamePlaceholder={firstNamePlaceholder}/>
                    <LastName lastNameLabel={lastNameLabel} lastNamePlaceholder={lastNamePlaceholder}/>
                </div>
                
                <Email emailLabel={emailLabel} emailPlaceholder={emailPlaceholder}/>
                <Password passwordLabel={passwordLabel} passwordPlaceholder={passwordPlaceholder}/>
                <Link to={"/Login"}><Submitbutton submitButtonText={backToLoginText}/></Link>
                <Link to={"/Profile"}><Submitbutton submitButtonText={submitButtonText}/></Link>
                
            </form>
        </div>
        
    )
}

export default Register;