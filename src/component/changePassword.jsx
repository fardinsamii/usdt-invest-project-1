//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

//all css/images
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/recharge.css";
import "../assets/css/change_pass.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//component
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";

import axios from "axios";
import { useEffect, useState } from "react";
import SingleHeader from "./extra/SingleHeader";

const changePassword = () => {
  const navigate = useNavigate();
  const [old_password, setOldPasword] = useState("");
  const [new_password, setNewPasword] = useState("");
  const [confirm_password, setConfirmPasword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try{
        const formData = {
          old_password,
          new_password,
          confirm_password,
        };
        const response = await axios.post("api/password", formData);
        console.log(response);

              // Show the response message
      setAlertMessage(response.data.message || "Something happened");
      setAlertVisible(true);
  
      // After showing the message, check if status is true
      setTimeout(() => {
        setAlertVisible(false); // Hide the alert after 2 seconds
  
        if (response.data.status) {
          // If status is true, navigate to the desired URL
          navigate("/me"); // Example: navigate to a success page
        }
      }, 2000); // Wait 2 seconds before hiding the alert and checking status
      }catch(error){
        console.error("Error submitting form:", error);
      } finally {
      setIsLoading(false); // Hide loader when the request is completed
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
        <div
          className="card login_reg_card account_card shadow-lg"
          style={{ width: "720px" }}
        >
          <SingleHeader backPage={"/me"}></SingleHeader>
          {alertVisible && (
                <div className="custom_alert address_alert_copy">
                  {alertMessage}
                </div>
              )}
          {isLoading && <CustomLoader />} {/* Conditional rendering of the loader */}
          <div className="change-pass-actions p-4 text-center">
            <form onSubmit={handleSubmit}>
              <div className="container-card p-4 relative rd-$card-radius p-$mg c-$btn-text">
                <div className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      placeholder="Old Password"
                      className="form-control"
                      type="password"
                      name="old_password"
                      value={old_password}
                      onChange={(e) => setOldPasword(e.target.value)}
                    ></input>
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div className="input-pwd-eye"></div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                <div className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      placeholder="New Password"
                      className="form-control"
                      type="password"
                      name="new_password"
                      value={new_password}
                      onChange={(e) => setNewPasword(e.target.value)}
                    ></input>
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div className="input-pwd-eye"></div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                <div className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      placeholder="Reenter new password"
                      className="form-control"
                      type="password"
                      name="confirm_password"
                      value={confirm_password}
                      onChange={(e) => setConfirmPasword(e.target.value)}
                    ></input>
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div className="input-pwd-eye"></div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>
                <a className="base-main-btn flex items-center justify-center">
                  <div className="base-main-btn-content">
                    <button type="submit" className="btn">
                      Confirm
                    </button>
                  </div>
                </a>
              </div>
            </form>
          </div>
        </div>
        {/* <SupportLink /> */}
        {/* support section */}
      </div>
    </div>
  );
};

export default changePassword;
