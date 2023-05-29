import "./home.css"
import Heading from "../Generic components/Heading/Heading";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="homecontainer">
            <div className="navbarcontainer">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <div><Link id="navbaritem" class="navbar-brand" to={"/"}>Home</Link></div>

              <div><Link id="navbaritem" class="navbar-brand" to={"/Feedoffer"}>Neues Angebot</Link></div>

              <div><Link id="navbaritem" class="navbar-brand" to={"/Feedrequest"}>Neues Gesuch</Link></div>
              
              <div><Link id="navbaritem" class="navbar-brand" to={"/Login"}>Login</Link></div>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button  class="btn btn-outline-success" id="search-button" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

        </div>
            

        </div>
        
    )
}

export default Home;