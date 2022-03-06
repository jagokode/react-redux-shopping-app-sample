import "./Header.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Link to="/cart">
              <Cart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
