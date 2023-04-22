import "./register.css"
// import Submitbutton from "../button/submittbutton";
import Submitbutton from "../Generic components/button/Submittbutton";
import Email from "../email/Email";
import Password from "../password/Password";
import FirstName from "../names/FirstName";
import LastName from "../names/LastName";

const Register = ({firstNameLabel, firstNamePlaceholder, lastNameLabel, lastNamePlaceholder, emailLabel, emailPlaceholder, passwordLabel, passwordPlaceholder, submitButtonText}) => {

    return(
        <div className="register-container">
             <form class="row g-3 needs-validation" novalidate>
                
                <FirstName firstNameLabel={firstNameLabel} firstNamePlaceholder={firstNamePlaceholder}/>

                <LastName lastNameLabel={lastNameLabel} lastNamePlaceholder={lastNamePlaceholder}/>

                <Email emailLabel={emailLabel} emailPlaceholder={emailPlaceholder}/>

                <Password passwordLabel={passwordLabel} passwordPlaceholder={passwordPlaceholder}/>

                <Submitbutton submitButtonText={submitButtonText}/>
                
              </form>
            
        </div>
    )

}

export default Register;