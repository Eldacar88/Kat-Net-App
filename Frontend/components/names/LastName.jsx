import "./lastname.css"

const LastName = ({lastNameLabel, lastNamePlaceholder}) => {

    return(
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">{lastNameLabel}</label>
            <input type="text" class="form-control" id="lastnameinput" placeholder={lastNamePlaceholder}/>
        </div>
    )
}

export default LastName;