import React from "react";


const Input = ({name, placeholder}) => {

return (
    <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">{name}</span>
    <input type="text" className="form-control" placeholder={placeholder} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  </div>
  );
}


export default Input;