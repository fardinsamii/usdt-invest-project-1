import "../../assets/css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Lang from "../partial/lang"; // Assuming Lang component is in this path
import { useTranslation } from "react-i18next";

function authTopPart() {
  const { t, i18n } = useTranslation();
  return (
      <div className="top_part">
          <div className="d-flex justify-content-between align-items-center head_part">
            <a href="https://t.me/your_telegram_link" className="support_link">
              <FontAwesomeIcon icon={faHeadset} />
            </a>

            <Lang />
          </div>
          <div className="text-center mb-2">
            <img
              src={logo}
              alt="Logo"
              className="logo_round"
              style={{ width: "90px" }}
            />
          </div>

          <div className="text-center mb-4 site_text">
            <h1 className="h4">PDVSA</h1>
            <div className="save_wrapp">
              <span><FontAwesomeIcon icon={faPiggyBank} />{t("save_money")}</span>
              <span><FontAwesomeIcon icon={faClock} />{t("save_time")}</span>
            </div>
          </div>
        </div>


    
  );
}

export default authTopPart;
