//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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
      <SingleHeader backPage={"/home"}></SingleHeader>

        <div className="finiancial-actions p-4 ">
          <div className="container-card p-4 relative rd-$card-radius p-$mg c-$btn-text">
            <div className="custom_tab_record">
              <div className="notice_content_wrapp">
                <div className="notice-content">
                    <h5 className="notice-title">System notification</h5>
                    <p className="notice_date_time">09/07/2024 18:54:53</p>
                </div>
                <div className="notice_details">
                    <p>The fastest way to make money here is not to save money yourself, but to form your own team to earn generous commissions, and to lead team members to make money together.</p>
                    <p>Team deposits can get 21% rewards as follows:</p>
                    <p>VIP level 1 stored value: 1000USDT, 16% reward, 160USDT.</p>
                    <p>VIP2 level stored value: 1000USDT, 3% reward, 30USDT.</p>
                    <p>VIP3 level stored value: 1000USDT, 2% reward, 20USDT.</p>
                    <p>Additional rewards for team 24-hour charging are as follows. Subject to platform update time</p>
                    <p>If you deposit 1,000 USDT within 24 hours, you will be rewarded with 20 USDT</p>
                    <p>If you deposit 3,000 USDT within 24 hours, you will be rewarded 80 USDT</p>
                    <p>Recharge 5,000 USDT within 24 hours and receive a reward of 150 USDT</p>
                    <p>If you deposit 10,000 USDT within 24 hours, you will be rewarded with 500 USDT</p>
                    <p>If you deposit 20,000 USDT within 24 hours, you will be rewarded with 1,000 USDT</p>
                    <p>Contact me if you meet the above reward conditions, cash reward or commission reward</p>
                </div>
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
