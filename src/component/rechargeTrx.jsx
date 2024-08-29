import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/recharge.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/images/logo.webp";
import Barcode from "../assets/images/barcode.gif";
import trc20 from "../assets/images/trc20-usdt.jpg";
import Navbar from "./partial/navbar";
import CopyAddress from "./extra/copyAddress";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import "../assets/css/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";

const recharge = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility
  const qrCodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(
    data.address_base58
  )}&code=QRCode&eclevel=L`;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClick = () => {
    const fetchDeposit = async () => {
      setIsLoading(true); // Show loader when the request starts
      try {
        const params = {
          type: "TRX",
        };
        const response = await axios.get("api/deposite-information", {
          params,
        });
        console.log(response.data);
        setAlertMessage("Recharge successful");
        setAlertVisible(true);
        setTimeout(hideAlert, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader when the request is completed
      }
    };

    fetchDeposit();
  };

  const hideAlert = () => {
    setAlertVisible(false);
    navigate("/me");
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loader during initial data fetch
      try {
        const response = await axios.get("api/trxaddress");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      {isLoading && <CustomLoader />}{" "}
      {/* Conditional rendering of the loader */}
      <div
        className="card login_reg_card account_card shadow-lg"
        style={{ width: "720px" }}
      >
        
        <SingleHeader backPage={"/recharge-method"}></SingleHeader>
        
        {alertVisible && (
          <div className="custom_alert address_alert_copy">{alertMessage}</div>
        )}
        <div className="recharge-actions p-4 text-center">
          <div className="container p-4 container_box">
            <div className="recharge_logo_label mb-4">
              <img src={logo} />
              <span>PDVSA</span>
            </div>
            <div className="recharge_label mb-4">
              <img src={trc20} />
              <span>TRC20-USDT</span>
            </div>
            <div className="qr-section">
              <img src={qrCodeUrl} alt="QR Code" className="qr-code" />
              <h2 className="adress_txt">Address</h2>
            </div>
            <div className="details-section">
              <CopyAddress address={data.address_base58} />

              <button className="recharge-button" onClick={handleClick}>
                Recharge completed
              </button>
            </div>
          </div>
        </div>
        <div className="recharge-actions p-4 py-2 px-4">
          <div className="container px-3 py-3 container_box recharge_info_text">
            <p>
              1. Copy the address above or scan the QR code and select Tron
              (TRC20) network to deposit USDT
            </p>
            <p>
              2. Please do not recharge other non-Tron(TRC20)-USDT assets. The
              funds will arrive in your account in about 1 to 3 minutes
            </p>
            <p>
              3. If it does not arrive for a long time, please refresh the page
              or contact customer service
            </p>
          </div>
        </div>
      </div>
      {/* support section */}
      {/* <SupportLink /> */}
      {/* support section */}
      <Navbar />
    </div>
  );
};

export default recharge;
