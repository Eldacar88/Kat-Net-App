import "./login.css"
//import Submitbutton from "../button/submittbutton";
import Submitbutton from "../Generic components/button/Submittbutton";
import Email from "../email/Email";
import Password from "../password/Password";

const Login = ({emailLabel, emailPlaceholder, passwordLabel, passwordPlaceholder, submitButtonText}) => {

    return(
        <div className="login-container">
            <form class="row g-3 needs-validation" novalidate>

                <Email emailLabel={emailLabel} emailPlaceholder={emailPlaceholder}/>

                <Password passwordLabel={passwordLabel} passwordPlaceholder={passwordPlaceholder}/>
            
                <Submitbutton submitButtonText={submitButtonText}/>
            </form>
            
        </div>
    )

}

export default Login;