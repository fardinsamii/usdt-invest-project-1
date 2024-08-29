//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

//all css/images
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/recharge.css";
import "../assets/css/finiancial.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//component
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";
import SingleHeader from "./extra/SingleHeader";
const financial = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/me");
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card account_card shadow-lg" style={{ width: "720px" }}>
        <SingleHeader backPage={"/home"}></SingleHeader>

        <div className="finiancial-actions p-4 ">
          <div className="container-card p-4 relative rd-$card-radius p-$mg c-$btn-text">
            <div className="custom_tab_record">
              <Link to="/notice-content" className="notice_wrapp">
                <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} className="notice_envelop"></FontAwesomeIcon>
                </div>
                <div className="notice-content">
                    <h5 className="notice-title">Platform invitation rewards</h5>
                    <p className="notice_date_time">09/07/2024 18:54:53</p>
                </div>
              </Link>
              <div className="no_data_wrapp text-center mt-4">
                <span className="no_data">No Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        

        <CustomLoader />

        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}

      </div>
    </div>
  );
};

export default financial;
