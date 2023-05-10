import React from 'react'



const InputDropdownR = ({inputDropdownLabel, selectionDefault, selectionOne, selectionTwo, selectionThree}) => {

    return (
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">{inputDropdownLabel}</label>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>{selectionDefault}</option>
          <option value="1">{selectionOne}</option>
          <option value="2">{selectionTwo}</option>
          <option value="3">{selectionThree}</option>
        </select>
      </div>
    )
  }
  
  export default InputDropdownR;