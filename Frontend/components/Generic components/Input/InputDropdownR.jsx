import React from 'react'



const InputDropdownR = ({name, dropDownTitle, dropDown1, dropDown2, dropDown3}) => {

    return (
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">{name}</span>
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{dropDownTitle}</button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><a className="dropdown-item" href="#">{dropDown1}</a></li>
    <li><a className="dropdown-item" href="#">{dropDown2}</a></li>
    <li><a className="dropdown-item" href="#">{dropDown3}</a></li>
  </ul>
</div>
    )
  }
  
  export default InputDropdownR;