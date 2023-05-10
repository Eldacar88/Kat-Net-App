import "./offer.css"

import Heading from "../Generic components/Heading/Heading";
import Input from "../Generic components/Input/Input";
import InputDropdownR from "../Generic components/Input/InputDropdownR";
import Submitbutton from "../Generic components/button/Submittbutton";

import { useRef} from "react";
import { uuid4 } from "uuid4";

const Angebot = ({offer, setOffer}) => {
      const formRef = useRef("");
      const titleRef = useRef("");
      const locationRef= useRef("");
      const periodRef = useRef("");
      const helpRef = useRef("");
      const helpspecificRef = useRef("");
      const telefonRef = useRef("");
      const emailRef = useRef("");
      const descriptionRef = useRef("");

      const addOffer = async (event) => {
        event.preventDefault();
        const form = formRef.current;
          console.log("I work")
          const id = uuid4();

          const newOffer = {
            id: id,
            title: formRef.title.current.value,
            location: formRef.location.current.value,
            period: formRef.period.current.value,
            help: helpRef.help.current.value,
            helpspecific: formRef.helpspecific.current.value,
            telefon: formRef.telefon.current.value,
            email: formRef.email.current.value,
            description: formRef.description.current.value
          }
          console.log(offer);
          setOffer(newOffer);
      }

    return (
      <div className="offer">
        <Heading title={"Hilfsangebot"}/>
        <form ref={formRef}
        onSubmit={(e)=>{
        addOffer(e);
      }}>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Titel:</span>
            <input ref={titleRef} name="title" required type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Geben Sie einen kurzen und präzisen Titel ein."}/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Ort:</span>
            <input ref={locationRef} name="location" required type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Wo benötigen Sie Hilfe?"}/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Zeitraum:</span>
            <input ref={periodRef} name="period" required type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Geben Sie einen möglichst präzisen Zeitraum an."}/>
          </div>


          <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Katastrophe</label>
          <select ref={helpRef} name="help" required class="form-select" id="inputGroupSelect01">
            <option selected>Auswahl</option>
            <option value="1">Material</option>
            <option value="2">Verpflegung</option>
            <option value="3">Arbeitskraft</option>
          </select>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Telefon:</span>
            <input ref={helpRef} name="help" inputDropdownLabel={"Hilfe:"} type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Wobei können Sie genau helfen?"}/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Telefon:</span>
            <input ref={telefonRef} name="telefon" required type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Hier Telefonnummer eintragen."}/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Email:</span>
            <input ref={emailRef} name="email" required type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Hier Emailadresse eintragen."}/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Beschreibung:</span>
            <input ref={descriptionRef} name="description" required type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Beschreibung ihrer Situation."}/>
          </div>

          <Submitbutton onSubmit={addOffer} submitButtonText={"Submit"}/>

        </form>
        
      </div>
    )
  }

  export default Angebot;