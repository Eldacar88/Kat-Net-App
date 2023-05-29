import "./feedoverview.css"
import Feedoffer from "./Feedoffer";
import Feedrequest from "./Feedrequest";
import Offercard from "../cards/Offercard";
import Requestcard from "../cards/Requestcard";

const Feedoverview = () => {
    return(
        <div className="overviewcontainer">
            <Feedoffer/>
            <Feedrequest/>
        </div>
    )
}

export default Feedoverview;