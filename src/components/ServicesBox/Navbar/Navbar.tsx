import { NavbarComponent } from "./Navbar.style";
import { HomeImage } from "./Navbar.style";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarComponent>
      <Link to="/">
        {" "}
        <HomeImage src="/public/home.png" alt="icono de una casa" />
      </Link>
      <Link to="/Shop">
        {" "}
        <HomeImage src="/public/shop.png" alt="icono de una casa" />
      </Link>
    </NavbarComponent>
  );
}

export default Navbar;
