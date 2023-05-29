import "./offermodal.css"
import { useRef, useState} from "react";
import { uuid4 } from "uuid4";
import axios from 'axios'

import Heading from "../Generic components/Heading/Heading";
import Submitbutton from "../Generic components/button/Submittbutton";

const Offermodal = () => {
    const formRef = useRef();

    const addOffer = async (event) => {
        event.preventDefault();
        console.log(event)
        const formData = new FormData();
        const form = formRef.current;
          
        const id = uuid4();
        formData.append("id",id);
        formData.append("title", form.title.value);
        formData.append("location", form.location.value);
        formData.append("period", form.period.value);
        formData.append("help", form.help.value);
        formData.append("helpspecific", form.helpspecific.value);
        formData.append("telefon", form.telefon.value);
        formData.append("email", form.email.value);
        formData.append("description", form.description.value);

        
        try {
                const options = {
                  url: "http://localhost:3001/postoffer",
                  method: "POST",
                  headers: {
                      "Content-Type": "multipart/form-data"
                  },
                  data: formData
                }
                const response = await axios(options);
                console.log(response.data); 
                if (!response.ok) {
                  throw new Error("Failed to create post");
                }
      
              } catch (error) {
                console.error(error);
      
              }
            };
        

      

    return(
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Neues Hilfsangebot erzeugen</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h3>Neues Hilfsangebot</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">    
                <form ref={formRef}
                onSubmit={(e)=>{
                addOffer(e);
            }}>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Titel:</span>
                    <input  name="title" required type="text" id="inputField"
                    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    placeholder={"Geben Sie einen kurzen und präzisen Titel ein."}/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Ort:</span>
                    <input  name="location" required type="text" id="inputField"
                    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    placeholder={"Wo benötigen Sie Hilfe?"}/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Zeitraum:</span>
                    <input  name="period" required type="text" id="inputField"
                    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    placeholder={"Geben Sie einen möglichst präzisen Zeitraum an."}/>
                </div>


                <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Katastrophe</label>
                <select name="help" required class="form-select" id="inputGroupSelect01">
                    <option selected>Auswahl</option>
                    <option value="1">Material</option>
                    <option value="2">Verpflegung</option>
                    <option value="3">Arbeitskraft</option>
                </select>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Telefon:</span>
                    <input name="helpspecific" inputDropdownLabel={"Hilfe:"} type="text" id="inputField"
                    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    placeholder={"Wobei können Sie genau helfen?"}/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Telefon:</span>
                    <input name="telefon" required type="text" id="inputField"
                    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    placeholder={"Hier Telefonnummer eintragen."}/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email:</span>
                    <input name="email" required type="text" id="inputField"
                    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    placeholder={"Hier Emailadresse eintragen."}/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Beschreibung:</span>
                    <input name="description" required type="text" id="inputField"
                    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    placeholder={"Beschreibung ihrer Situation."}/>
                </div>

                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" onSubmit={addOffer} class="btn btn-primary">Submit</button>
                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Offermodal;