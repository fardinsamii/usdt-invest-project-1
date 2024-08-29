//all packages
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

//all css/images
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/recharge.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//component
import Navbar from "./partial/navbar";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";
const withdrawRecord = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card account_card shadow-lg" style={{ width: "720px" }}>
      <SingleHeader backPage={"/me"}></SingleHeader>

        <div className="finiancial-actions p-4 text-center">
        <div className="container-card p-4 relative rd-$card-radius p-$mg c-$btn-text">
          <div className="withdrawal_table">
            <div className="heading_record">
              <strong>Withdrawal time</strong>

              <strong>Withdrawal Amount</strong>

              <strong>Withdrawal Address</strong>

              <strong>Withdrawal Status</strong>
            </div>
            <div className="body_record">
              <span>2024-06-14 21:14:27</span>

              <span>100.00</span>

              <span>TBVwN************************iZm7C</span>

              <span>
                <a href="#" className="btn btn-danger record__successfully_btn">
                  Successfully Completed
                </a>
              </span>
            </div>
          </div>
        </div>
          
        </div>
      </div>
        

        <CustomLoader />

        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}

        <Navbar />
      </div>
    </div>
  );
};

export default withdrawRecord;
