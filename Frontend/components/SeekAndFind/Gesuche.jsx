import "./seeks.css"

import Heading from "../Generic components/Heading/Heading";
import Input from "../Generic components/Input/Input";
import InputDropdownR from "../Generic components/Input/InputDropdownR";
import Submitbutton from "../Generic components/button/Submittbutton";

import { useRef} from "react";
import { uuid4 } from "uuid4";


const Gesuche = ({request, setRequest}) => {
      const formRef = useRef("");
      const titleRef = useRef("");
      const locationRef = useRef("");
      const periodRef = useRef("");
      const catastropheRef = useRef("");
      const helpRef = useRef("");
      const telefonRef = useRef("");
      const emailRef = useRef("");
      const descriptionRef = useRef("");

      const addRequest = async (event) => {
        event.preventDefault();
        const form = formRef.current;

          const id = uuid4();

          const newRequest = {
            id: id,
            title: titleRef.current.value,
            location: locationRef.current.value,
            period: periodRef.current.value,
            catastrophe: catastropheRef.current.value,
            help: helpRef.current.value,
            telefon: telefonRef.current.value,
            email: emailRef.current.value,
            description: descriptionRef.current.value
          }

          setRequest([...request, newRequest]);

      }
      
    return (
      <div className="seeks">
        <Heading title={"Hilfsgesuch"}/>
        <form ref={formRef}
      onSubmit={(e)=>{
        addRequest(e);
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
          <select ref={catastropheRef} name="catastrophe" required class="form-select" id="inputGroupSelect01">
            <option selected>Auswahl</option>
            <option value="1">Erdbeben</option>
            <option value="2">Hochwasser</option>
            <option value="3">Stromausfall</option>
          </select>
        </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Gesuchte Hilfe:</span>
            <input ref={helpRef} name="help" required type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Wobei benötigen Sie Hilfe?"}/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Gesuchte Hilfe:</span>
            <input ref={telefonRef} name="telefon" required type="text" id="inputField"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder={"Hier Telefonnummer eintragen."}/>
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

          <Submitbutton onSubmit={addRequest} submitButtonText={"Submit"}/>
          

        </form>
      </div>
    )
  }

  export default Gesuche;