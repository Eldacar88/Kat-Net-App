import "./register.css"

import LastName from "../names/LastName";
import FirstName from "../names/First";
import Email from "../email/Email";
import Password from "../password/Password";
import Submitbutton from "../Generic components/button/Submittbutton";
import { Link } from "react-router-dom";
import { useRef, useState} from "react";
import axios from 'axios'
import { uuid4 } from "uuid4";


const Register = ({firstNameLabel, firstNamePlaceholder, lastNameLabel, lastNamePlaceholder, emailLabel, emailPlaceholder, passwordLabel, passwordPlaceholder, submitButtonText, backToLoginText}) => {
    const formRef = useRef();
    const [equal, setEqual] = useState(false);

    const registerUser = async(e) => {
        e.preventDefault();
        const form = formRef.current;
        const formData = {
            id: uuid4,
            firstname: form.firstname.value,
            lastname: form.lastname.value,
            email: form.email.value,
            password: form.password.value
        }
        console.log(formData);
        const config = {
            url: "http://localhost:3001/register",
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(formData)
        }
        try{
            const response = await axios(config);
            console.log(response);

            if(response.status !== 201){
                throw new Error('failed to register');
            }
        }
        catch(error){
            console.log(error.response.data.message);
        }

    }


    return(
        <div className="register-container">
            <form ref={formRef} onSubmit={(e) => registerUser(e)}>
                <h1>Register</h1>
                <div className="subcontainer">
                    <FirstName required name="firstname" firstNameLabel={firstNameLabel} firstNamePlaceholder={firstNamePlaceholder}/>
                    <LastName required name="lastname" lastNameLabel={lastNameLabel} lastNamePlaceholder={lastNamePlaceholder}/>
                </div>
                
                <Email required name="email" emailLabel={emailLabel} emailPlaceholder={emailPlaceholder}/>
                <Password required name="password" passwordLabel={passwordLabel} passwordPlaceholder={passwordPlaceholder}/>
                <Link to={"/Login"}><Submitbutton submitButtonText={backToLoginText}/></Link>
                <Link to={"/Profile"}><Submitbutton type="submit" submitButtonText={submitButtonText}/></Link>
                
            </form>
        </div>
        
    )
}

export default Register;