//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link , useNavigate } from "react-router-dom";

//all css/images
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/recharge.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/images/logo.webp";
import trc20 from "../assets/images/trc20-usdt.jpg";
import trx from "../assets/images/trx.webp";
import Barcode from "../assets/images/barcode.gif";

//component
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";
import SingleHeader from "./extra/SingleHeader";

const rechargeMethod = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card account_card shadow-lg" style={{ width: "720px" }}>
        <SingleHeader backPage={"/me"}></SingleHeader>
        

        <div className="recharge-actions p-4">
          <div className="container p-4 py-2 container_box">
            <Link to="/recharge" className="recharge_method_list">
                <div className="rechage_method_label">
                    <img src={trc20} />
                    <span>TRC20-USDT</span>
                </div>
                <div className="method_right_icon">
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
            </Link>
            <Link to="/recharge-trx" className="recharge_method_list">
                <div className="rechage_method_label">
                    <img src={trx} />
                    <span>TRX</span>
                </div>
                <div className="method_right_icon">
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
            </Link>
          </div>
        </div>
      </div>
    

      
      <CustomLoader />
      {/* support section */}
      {/* <SupportLink /> */}
      {/* support section */}

    </div>
  );
};

export default rechargeMethod;
