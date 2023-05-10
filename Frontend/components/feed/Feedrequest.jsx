import "./feedrequest.css"
import Gesuche from "../SeekAndFind/Gesuche"

const Feedrequest = ({request, setRequest}) => {
    return(
        <div className="requestcontainer">
            <ul className="requestList">
                {
                request.length > 0 ?
                 request.map((element) => {
                        return <Gesuche
                         request={request}
                         setRequest={setRequest}
                         id={element.id}
                         title={element.title}
                         location={element.location}
                         period ={element.period}
                         catastrophe={element.catastrophe}
                         help={element.help}
                         telefon={element.telefon}
                         email={element.email}
                         description={element.description}
                         />
                    })
                    : null
                }
            </ul>
        </div>
    )
}

export default Feedrequest;

