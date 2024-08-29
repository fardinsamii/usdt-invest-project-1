//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

//all css/images
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/recharge.css";
import "../assets/css/account.css"
import "bootstrap-icons/font/bootstrap-icons.css";

//component
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";

import { useEffect, useState } from "react";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";

const account = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    balance: '0.00',
    withdraw_balance: '0.00'
  });

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/auth/user");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card account_card shadow-lg" style={{ width: "720px" }}>
        <SingleHeader backPage={"/me"}></SingleHeader>
      
      <div className="account-actions p-4">
        <div className="container-card relative rd-$card-radius p-4 c-$btn-text">
          <div className="accountInfo-content relative z-1">
            <div className="account_box mb-20px">
              <div className="title">Basic account</div>
              <div className="text-18px mb-3">
                {data.balance} <strong className="color-red">USDT</strong>
              </div>
            </div>
            <div className="account_box">
              <div className="title">Withdrawal account</div>
              <div className="value text-18px">
              {data.withdraw_balance} <strong className="color-red">USDT</strong>
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
  );
};

export default account;
