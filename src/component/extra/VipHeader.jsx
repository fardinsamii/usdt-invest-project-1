import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Lang from "../partial/lang"; // Assuming Lang component is in this path

function VipHeader() {

  return (
    <div className="d-flex justify-content-between align-items-center head_part home_head">
    <div className="site_title d-flex align-items-center">
    <img
      src={logo}
      alt="Logo"
      className="logo_round_page"
      style={{ width: "30px" }}
    /> <span><strong className="text-white ms-1 mb-0">PDVSA</strong></span>
    </div>
    <div className="header_right_part d-flex align-items-center" style={{ gap: "10px" }}>
    <Link to="/notice" className="support_link">
        <FontAwesomeIcon icon={faBell} />
    </Link>
    <a href="https://t.me/your_telegram_link" className="support_link">
      <FontAwesomeIcon icon={faHeadset} />
    </a>

    <Lang />
    </div>
  </div>


    
  );
}

export default VipHeader;
