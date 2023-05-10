import "./password.css"

const Password = ({passwordLabel, passwordPlaceholder}) => {
    return(
        <div>
            <label for="inputPassword5" class="form-label">{passwordLabel}</label>
            <input type="password" id="passwordInput" class="form-control" placeholder={passwordPlaceholder}/>
            <div id="passwordHelpBlock" class="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>
        </div>
    )
}

export default Password;