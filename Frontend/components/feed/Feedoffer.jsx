import "./feedoffer.css"
import Offermodal from "../modal/Offermodal";
import Offercard from "../cards/Offercard";
import Submitbutton from "../Generic components/button/Submittbutton";
import { useState, useEffect } from "react"
import { uuid4 } from "uuid4";
import axios from 'axios'

const Feedoffer = () => {

    const [offer, setOffer] = useState([
        {
                 id: uuid4(),
                 title: "Schippen für Überflutung",
                 location: "Ahrtal",
                 period: "Juni 2023",
                 help: "Material",
                 helpspecific: "Biete Schippen an.",
                 telefon: "0231324132",
                 email: "www@gmail.com",
                 description: "dsdfs"
             },

             {
                id: uuid4(),
                title: "Decken für Überflutung",
                location: "Ahrtal",
                period: "Mai 2023",
                help: "Material",
                helpspecific: "Biete Decken an.",
                telefon: "0231324133422",
                email: "aaaa@gmail.com",
                description: "sdfs"
            },
            {
                id: uuid4(),
                title: "Sandsäcke für Überflutung",
                location: "Ahrtal",
                period: "Juli 2023",
                help: "Material",
                helpspecific: "Biete Schippen an.",
                telefon: "023132413221231",
                email: "sdssd@gmail.com",
                description: "sdfsa"
            }
    ]);

    const getOfferFromBackend = async () => {
        try {
          const response = await axios("http://localhost:3001/getoffer");
          console.log(response.data)
          const newOffers = response.data.map((offer) => {
            return {
              id: offer.id,
              title: offer.title,
              location: offer.location,
              period: offer.period,
              help: offer.help,
              helpspecific: offer.helpspecific,
              telefon: offer.telefon,
              email: offer.email,
              description: offer.description
            };
          });
          console.log(newOffers);
          setOffer(newOffers);
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        getOfferFromBackend();
      }, []);

    return(
        <div className="offercontainer">
            {/*

            

            <h1 id="header">Hilfsangebote</h1>

            <div id="imagecontainer">
                <img src="../../img/offer_picture_1.jpg" alt="picture1" ></img>
                <img src="../../img/offer_picture_2.jpg" alt="picture2" ></img>
            </div>

            <div id="descriptioncontainer">
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
            */}

            
                {
                
                 offer.map((element) => {
                        return <Offercard
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
                }
            
            
                    
            <Offermodal/>
            
        </div>

    )
}

export default Feedoffer;

