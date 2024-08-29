import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Lang from "../partial/lang"; // Assuming Lang component is in this path
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  return (
      <div className="top_part">
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
      

          <div className="text-center mb-4 site_text">
            <div className="notice-site">
                <span><FontAwesomeIcon icon={faBell} /></span>
                <div className="marquee-wrap">
                <div className="marquee-content">{t("home_welcome_notice")}</div>
                </div>
                
            </div>
            
            <div className="save_wrapp">
              <span><FontAwesomeIcon icon={faPiggyBank} />{t("save_money")}</span>
              <span><FontAwesomeIcon icon={faClock} />{t("save_time")}</span>
            </div>
          </div>
        </div>


    
  );
}

export default App;
