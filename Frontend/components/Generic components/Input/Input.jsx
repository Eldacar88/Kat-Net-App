import "./input.css"


const Input = ({inputTitle, inputPlaceHolder}) => {

return (
  <div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">{inputTitle}</span>
    <input type="text" id="inputField" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={inputPlaceHolder}/>
  </div>
  )
}


export default Input;