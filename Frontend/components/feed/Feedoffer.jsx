import "./feedoffer.css"
import Angebot from "../SeekAndFind/Angebot"

const Feedoffer = ({offer, setOffer}) => {
    return(
        <div className="offercontainer">
            <ul className="offerList">
                {
                offer.length > 0 ?
                 offer.map((element) => {
                        return <Angebot
                         offer={offer}
                         setOffer={setOffer}
                         id={element.id}
                         title={element.title}
                         location={element.location}
                         period ={element.period}
                         help={element.help}
                         helpspecific={element.helpspecific}
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

export default Feedoffer;

