import "./Header.scss";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import backarrow from "../../assets/images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg";
import forwardarrow from "../../assets/images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg";

function Header() {
  return (
    <div className="header">
      <Nav />
      <div className="nav-arrows">
        <div className="nav-arrows__container">
          <Link to={"/"} className="nav-arrows__link">
            <img
              src={backarrow}
              alt="back arrow"
              className="nav-arrows__icon"
            />
          </Link>
        </div>
        <div className="nav-arrows__container">
          <Link to={"/"} className="nav-arrows__link">
            <img
              src={forwardarrow}
              alt="forward arrow"
              className="nav-arrows__icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header