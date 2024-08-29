import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/images/logo.webp";
import "../assets/css/vip.css"

//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
const vip = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <CustomLoader />
      <div className="card login_reg_card vip_card p-4 shadow-lg vip_header_card" style={{ width: "720px" }}>
        <div className="top_part vip_header">
          <HeaderMain />
        </div>
        
        <div className="vip-actions">
          {[...Array(6)].map((_, index) => (
            <div className="vip_list_item mb-3" key={index}>
              <span className="vip_level">VIP1</span>
              <div className="d-flex align-items-center">
                <div className="item_img">
                  <img src={logo} alt="Nike99 Logo" className="me-2 w-100" />
                </div>
                <div className="item_details">
                  <div className="row">
                    <div className="col-6">
                      <div className="text-start">
                        <p className="mb-0 text-muted">{t("daily_task")}</p>
                        <p className="mb-0 text-muted">{t("simple_interest")}</p>
                        <p className="mb-0 text-muted">{t("daily_profit")}</p>
                        <p className="mb-0 text-muted">{t("the_total_profit")}</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <p className="mb-0 text-muted">1</p>
                        <p className="mb-0 c-green">3.00</p>
                        <p className="mb-0 text-muted"><strong>3.00</strong> USDT</p>
                        <p className="mb-0 text-muted"><strong>120.00</strong> USDT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* d-flex ends */}
              <div className="text-end">
                <span className="price"><strong>15.00</strong> USDT Unlock Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      

        

      {/* support section */}
      {/* <SupportLink /> */}
      {/* support section */}

      <Navbar />
    </div>
  );
};

export default vip;
