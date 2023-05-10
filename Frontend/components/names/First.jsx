import "./first.css"

const FirstName = ({firstNameLabel, firstNamePlaceholder}) => {

    return(
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">{firstNameLabel}</label>
            <input type="text" class="form-control" id="firstnameinput" placeholder={firstNamePlaceholder}/>
        </div>
    )
}

export default FirstName;