import "./profile.css"
import InputDropdownR from "../Generic components/Input/InputDropdownR";
import Input from "../Generic components/Input/Input";
import Submitbutton from "../Generic components/button/Submittbutton";

const Profile = ({}) => {
    return(
        <div className="profilecontainer">

            <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02"/>
                <label class="input-group-text" for="inputGroupFile02">Hochladen</label>
            </div>

            <InputDropdownR inputDropdownLabel={"Anrede:"} selectionDefault={"..."}
            selectionOne={"Frau"} selectionTwo={"Herr"}/>

            <InputDropdownR inputDropdownLabel={"Geschlecht:"} selectionDefault={"..."}
            selectionOne={"Männlich"} selectionTwo={"Weiblich"} selectionThree={"Divers"}/>
            
            <Input inputTitle={"Vorname"}/>
            
            <Input inputTitle={"Nachname"}/>

            <Input inputTitle={"Beruf"}/>

            <Input inputTitle={"Fähigkeiten"}/>

            <div className="equipementcontainer">
                <label>Equipement:</label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Wasserpumpe </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Schaufel </label>
                </div>
            </div>

            <div className="areacontainer">
                <label>Einsatzbereich</label>
                <label for="customRange1" class="form-label">Umkreis in km:</label>
                <input type="range" class="form-range" id="customRange1"></input>
            </div>

            <Input inputTitle={"Zeitliche Verfügbarkeit:"}/>

            <Submitbutton submitButtonText={"Submit"}/>

        </div>
    )
}

export default Profile;