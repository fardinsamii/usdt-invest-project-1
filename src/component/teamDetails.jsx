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
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";

const financial = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card account_card shadow-lg" style={{ width: "720px" }}>
      <SingleHeader backPage={"/team"}></SingleHeader>

        <div className="team-details-actions p-4 ">
          <div className="container-card py-2 relative rd-$card-radius p-$mg c-$btn-text">
            <div className="team_details_container">
              <div className="account_info">
                <p>Account <span>pe***********n</span></p>
              </div>
              <div className="recharge_data">
                <div className="data_item">
                  <div className="data_lebel"><p>Recharge Amount</p></div>
                  <div className="data_value"><p>0.00</p></div>
                </div>
                <div className="data_item">
                  <div className="data_lebel"><p>Recharge Rebate</p></div>
                  <div className="data_value"><p>0</p></div>
                </div>
                <div className="data_item">
                  <div className="data_lebel"><p>Task Rebate</p></div>
                  <div className="data_value"><p>0</p></div>
                </div>
              </div>
              <div className="joining-time">
                <p>Joining Time: 30/07/2024 00:43:57</p>
              </div>
            </div>
            <div className="no_data_wrapp text-center mt-4">
                <span className="no_data">No Data</span>
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
