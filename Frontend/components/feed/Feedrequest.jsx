import "./feedrequest.css"
import Requestmodal from "../modal/Requestmodal";
import Requestcard from "../cards/Requestcard";
import Offercard from "../cards/Offercard";
import Submitbutton from "../Generic components/button/Submittbutton";
import { useState, useEffect } from "react"
import { uuid4 } from "uuid4";
import axios from 'axios'

const Feedrequest = () => {

    const [request, setRequest] = useState([

        {
            id: uuid4(),
            title: "Schippen für Überflutung",
            location: "Ahrtal",
            period: "Juni 2023",
            catastrophe: "Erdbeben",
            help: "Material",
            telefon: "0231324132",
            email: "www@gmail.com",
            description: "dsdfs"
        },

        {
           id: uuid4(),
           title: "Decken für Überflutung",
           location: "Ahrtal",
           period: "Mai 2023",
           catastrophe: "Hochwasser",
           help: "Material",
           telefon: "0231324133422",
           email: "aaaa@gmail.com",
           description: "sdfs"
       },
       {
           id: uuid4(),
           title: "Sandsäcke für Überflutung",
           location: "Ahrtal",
           period: "Juli 2023",
           catastrophe: "Stromausfall",
           help: "Material",
           telefon: "023132413221231",
           email: "sdssd@gmail.com",
           description: "sdfsa"
       }
    ]);

    const getRequestFromBackend = async () => {
        try {
          const response = await axios("http://localhost:3001/getrequest");
          console.log(response.data)
          const newRequests = response.data.map((request) => {
            return {
              id: request.id,
              title: request.title,
              location: request.location,
              period: request.period,
              catastrophe: request.catastrophe,
              help: request.help,
              telefon: request.telefon,
              email: request.email,
              description: request.description
            };
          });
          console.log(newRequests);
          //setRequest(newRequests);
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        getRequestFromBackend();
      }, []);

    return(
        
        <div className="requestcontainer">
            {/*
            <h1 id="header">Hilfsgesuche</h1>

                <div id="imagecontainer">
                    <img src="../../img/request_picture_1.jpg" alt="picture1" ></img>
                    <img src="../../img/request_picture_2.jpg" alt="picture2" ></img>
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
                
                 request.map((element) => {
                        return <Requestcard
                         offer={request}
                         setOffer={setRequest}
                         id={element.id}
                         title={element.title}
                         location={element.location}
                         period ={element.period}
                         help={element.help}
                         catastrophe={element.catastrophe}
                         telefon={element.telefon}
                         email={element.email}
                         description={element.description}
                         />
                    })
                    
                }
            

            <Requestmodal/>

            
        </div>
    )
}

export default Feedrequest;

