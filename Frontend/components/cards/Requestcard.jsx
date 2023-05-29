import "./requestcard.css"

const Requestcard = ({request, setRequest, id, title, location, period, catastrophe, help, telefon, email, description}) =>{
    return(
        
    
    <div className="requestcardcontainer">

            <div className="itemcontainer">
                <p className="item">Titel: </p>
                <p className="itemvalue">{title}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Ort: </p>
                <p className="itemvalue">{location}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Zeitraum: </p>
                <p className="itemvalue">{period}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Katastrophe: </p>
                <p className="itemvalue">{catastrophe}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Hilfe: </p>
                <p className="itemvalue">{help}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Telefon: </p>
                <p className="itemvalue">{telefon}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Email: </p>
                <p className="itemvalue">{email}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Beschreibung: </p>
                <p className="itemvalue">{description}</p>
            </div>

        </div>
    )
}

export default Requestcard;