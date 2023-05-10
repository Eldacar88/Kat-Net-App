import "./feedoverview.css"
import Feedoffer from "./Feedoffer";
import Feedrequest from "./Feedrequest";

const Feedoverview = ({offer, setOffer, request, setRequest}) => {
    return(
        <div className="overviewcontainer">
            <Feedoffer offer={offer} setOffer={setOffer}/>
            <Feedrequest request={request} setRequest={setRequest}/>
        </div>
    )
}

export default Feedoverview;