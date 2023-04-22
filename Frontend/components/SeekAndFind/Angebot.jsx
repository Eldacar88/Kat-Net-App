//import React from "react";
//import Input from "../Input/Input";
import Input from "../Generic components/Input/Input";
//import InputDropdownR from "../Input/InputDropdownR";
import InputDropdownR from "../Generic components/Input/InputDropdownR";
import Heading from "../Generic components/Heading/Heading";
import Submitbutton from "../Generic components/button/Submittbutton";

const Angebot = () => {

    return (
      <div className="Angebot">
        <Heading title={"Hilfsangebote"} className={"Heading1"}/> 
        <Input name={"Titel:"} placeholder={"Geben Sie hier einen kurzen und prägnanten Titel ein"}/>
        <Input name={"Ort:"} placeholder={"Wo benötigen Sie Hilfe?"}/>
        <Input name={"Zeitraum:"} placeholder={"Geben Sie den Zeitraum so präsize wie möglich ein."}/>
        <InputDropdownR name={"Katastrophe"} dropDownTitle={"Auswahl"} dropDown1={"Stromausfall"} dropDown2={"Hochwasser"} dropDown3={"Starkregen"}/>
        <Input name={"Angebot:"}/>
        <Input name={"E-Mail/Telefon:"} placeholder={"Geben Sie hier Ihre bevorzugte Anrt der Kontaktaufnahme an."}/>
        <Input name={"Beschreibung:"} placeholder={"Beschreiben Sie hier präzise, was Sie anbieten."}/>
        <Submitbutton/>
      </div>
    )
  }

  export default Angebot;