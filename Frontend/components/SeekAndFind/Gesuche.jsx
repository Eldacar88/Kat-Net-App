//import React from "react";
//import Input from "../Input/Input";
import Input from "../Generic components/Input/Input";
//import InputDropdownR from "../Input/InputDropdownR";
import InputDropdownR from "../Generic components/Input/InputDropdownR";
//import Heading from "../Heading/Heading";
import Heading from "../Generic components/Heading/Heading";

const Gesuche = () => {
    return (
      <div className="Hilfsgesuche">
        <Heading title={"Hilfsgesuche"} className={"Heading1"}/> 
        <Input name={"Titel:"} placeholder={"Geben Sie hier einen kurzen und prägnanten Titel ein"}/>
        <Input name={"Ort:"} placeholder={"Wo benötigen Sie Hilfe?"}/>
        <Input name={"Zeitraum:"} placeholder={"Geben Sie den Zeitraum so präsize wie möglich ein."}/>
        <InputDropdownR name={"Katastrophe"} dropDownTitle={"Auswahl"} dropDown1={"Stromausfall"} dropDown2={"Hochwasser"} dropDown3={"Starkregen"}/>
        <Input name={"Gesuchte Hilfe:"}/>
        <Input name={"E-Mail/Telefon:"} placeholder={"Geben Sie hier Ihre bevorzugte Anrt der Kontaktaufnahme an."}/>
        <Input name={"Beschreibung:"} placeholder={"Geben Sie hier weitere Informationen an z.B. ist festes Schuhwerk nötig o.Ä."}/>
      </div>
    )
  }

  export default Gesuche;