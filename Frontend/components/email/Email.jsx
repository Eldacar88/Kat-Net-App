import "./Email.css"

const Email = ({emailLabel, emailPlaceholder}) =>{
    return(
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">{emailLabel}</label>
            <input type="email" class="form-control" id="emailInput" placeholder={emailPlaceholder}/>
        </div>
    )
}

export default Email;