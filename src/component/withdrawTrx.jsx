import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/withdraw.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import logo from "../assets/images/logo.webp";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";

const withdraw = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [quota, setQuota] = useState("");
  const [actuallyReceived, setActuallyReceived] = useState(0);
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/withdraw");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleQuotaChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    const withdrawVat = 0;
    const total = value - withdrawVat;

    if (total > 0) {
      setActuallyReceived(total);
    } else {
      setActuallyReceived(0);
    }

    setQuota(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoading(true);
    try {
      // Prepare the data to send
      const formData = {
        quota,
        address,
        password,
        type: "TRX",
        // Add any other necessary data here
      };

      // Send POST request
      const response = await axios.post("api/withdraw", formData);

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
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error (show error message, etc.)
      setAlertMessage("An error occurred. Please try again.");
      setAlertVisible(true);

      // Hide the alert after 2 seconds
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    } finally {
      setIsLoading(false); // Hide loader when the request is completed
    }
  };

 

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div
        className="card login_reg_card account_card shadow-lg"
        style={{ width: "720px" }}
      >
        {isLoading && <CustomLoader />}{" "}
        {/* Conditional rendering of the loader */}
        <SingleHeader backPage={"/me"}></SingleHeader>
       
        <div className="withdraw-actions p-4 text-center">
          <form onSubmit={handleSubmit} action="#">
            <div className="container p-4 container_box">
              <div className="withdraw-header">
                <div className="withdraw_title">
                  <h2>Withdrawal account</h2>
                  <p className="subheader">24 hours withdrawal</p>
                </div>

                <a href="#" className="logo_icon">
                  <img src={logo} className="img-fluid" />
                </a>
              </div>
              {alertVisible && (
                <div className="custom_alert address_alert_copy">
                  {alertMessage}
                </div>
              )}
              <div className="balance-box text-start">
                <p className="total-balance">Total balance</p>
                <p className="balance-amount">
                  <strong>
                    {data?.user?.withdraw_balance &&
                    data?.settingtrx?.conversion
                      ? (
                          data.user.withdraw_balance /
                          data.settingtrx.conversion
                        ).toFixed(2)
                      : 0}
                  </strong>{" "}
                  TRX
                </p>
              </div>
              <div className="withdrawal-method mb-4">
                <p className="mb-0">Withdrawal method:</p>
                <div className="method-usdt">
                  <Link to="/withdraw" className="btn">
                    TRC20-USDT
                  </Link>
                  <Link to="/withdraw-trx" className="btn active">
                    TRX
                  </Link>
                </div>
              </div>

              <div className="input-group">
                <input
                  type="number"
                  step="0.01"
                  placeholder="Quota 3.00 - 30000.00"
                  className="input"
                  name="quota"
                  value={quota}
                  onChange={handleQuotaChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Withdrawal Address"
                  className="input"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="eye-icon"></span>
              </div>
              <div className="charge_box">
                <span className="charge_label">Handling Fees</span>
                <span className="charge_amount">0 TRX</span>
              </div>
              <div className="charge_box mb-3">
                <span className="charge_label">Actually received</span>
                <span className="charge_amount">{actuallyReceived} TRX</span>
              </div>
              <input type="hidden" name="type" value="TRX" />
              <button
                type="submit"
                className="confirm-button"
                disabled={isLoading}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <SupportLink /> */}
    </div>
  );
};

export default withdraw;
