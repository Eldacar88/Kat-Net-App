import "./submitbutton.css"
import { uuid4 } from "uuid4";

const Submitbutton = ({submitButtonText}) => {

    return(
        <button type="submit" class="btn btn-primary" id="submitbutton">{submitButtonText}</button>
    )
}

export default Submitbutton;