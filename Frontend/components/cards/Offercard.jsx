import "./offercard.css"

const Offercard = ({offer, setOffer, id, title,  location, period, help, helpspecific, telefon, email, description}) => {
    return(
        <div className="offercardcontainer">

            <div className="itemcontainer">
                <p className="item">Titel:</p>
                <p className="itemvalue">{title}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Ort:</p>
                <p className="itemvalue">{location}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Zeitraum:</p>
                <p className="itemvalue">{period}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Hilfe:</p>
                <p className="itemvalue">{help}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Hilfe spezifisch:</p>
                <p className="itemvalue">{helpspecific}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Telefon:</p>
                <p className="itemvalue">{telefon}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Email:</p>
                <p className="itemvalue">{email}</p>
            </div>

            <div className="itemcontainer">
                <p className="item">Beschreibung:</p>
                <p className="itemvalue">{description}</p>
            </div>

        </div>
    )
}

export default Offercard;