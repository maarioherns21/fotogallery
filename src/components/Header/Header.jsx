import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  //the click is the current state and setclick is the new state
  const [active, setActive] = useState("");
  const [click, setClick] = useState();

  const handleClick = () => setClick(!click);
  console.log(`${click} ---- this is handleclick the useState`);
  //this allos us to use the state
  const handleActive = () => setActive(active ? "Home" : "Return Home");
  console.log(`${active} ----- this is handleActive useState`)
 

  /// useEffect creates the effect evrytime is click on
  useEffect(() => {
    handleActive();
    handleClick();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="nav-links" to="/Gallery" onClick={handleClick}>
          Fotos
        </Link>
        <Link className="nav-links" to="/Pictures" onClick={handleClick}>
          Pictures
        </Link>
        <Link className="nav-links" to="/Detail" onClick={handleClick}>
          DetailPage
        </Link>
        <Link className="nav-links" to="/" onClick={handleActive}>
          {active}
        </Link>
      </div>
    </nav>
  );
}
