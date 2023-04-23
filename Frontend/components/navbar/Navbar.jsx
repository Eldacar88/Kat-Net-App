import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header">
      <div className="firstLine">
      <Link className="textDecoration" to={`/`}>
        <h1 >Kat-Net-App</h1>
      </Link>
      </div>
      <div className="secondLine">
        <div><Link className="textDecoration" to={`/Gesuch`}>Neues Gesuch</Link></div>
        <div><Link className="textDecoration" to={`/Angebot`}>Neues Angebot</Link></div>
        <div><Link className="textDecoration" to={`/Login`}>Login</Link></div>
      </div>
    </div>
  );
}
