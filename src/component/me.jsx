import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import depositeMe from "../assets/images/deposit_me.png";
import withdrawMe from "../assets/images/withdraw-me.png";

//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    withdraw_balance: "0.00",
  });
  const [secondApiData, setSecondApiData] = useState({
    amount: "0.00",
  });

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/auth/user");
        console.log(response.data);
        setData(response.data);

        const response2 = await axios.get("api/deposite/amount");
        console.log(response2.data);
        setSecondApiData(response2.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div
        className="card login_reg_card me_card_wrapp shadow-lg"
        style={{ width: "720px" }}
      >
        <div className="top_part p-4">
          <HeaderMain />
          <div className="me_top_txt">
            <div className="welcome">
              <h5>{t("hello")} ,fardinahmmedsami...</h5>
              <div>
                <span className="level">Te-VIP0</span>
              </div>
            </div>
            <p className="text-light">
              {t("welcome")} <strong>PDVSA</strong>
            </p>
          </div>
          <div className="acnt_blnc_details">
            <p className="lebel mb-0">{t("total_balance")} (USDT)</p>
            <h5 className="lebel_value">
              <strong>
                {(
                  parseFloat(data.withdraw_balance) + parseFloat(secondApiData.amount)
                ).toFixed(2)}
              </strong>
            </h5>
            <p className="lebel mb-0">{t("recharge_amount")} (USDT)</p>
            <h5 className="lebel_value mb-0">
              <strong>{parseFloat(secondApiData.amount).toFixed(2)}</strong>
            </h5>
          </div>
          <div className="me_top_btn">
            <Link to="/recharge-method" className="btn">
              <span className="btn_label">{t("recharge")}</span>
              <div className="btn_icon">
                <img src={depositeMe} />
              </div>
            </Link>
            <Link to="/withdraw" className="btn">
              <span className="btn_label">{t("withdraw")}</span>
              <div className="btn_icon">
                <img src={withdrawMe} />
              </div>
            </Link>
          </div>
        </div>

        <div className="me_link_actions p-4">
          <Link to="/account" className="me_link_list">
            <div className="link_label">{t("account")}</div>
            <div className="link_right_icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Link>
          <Link to="/financial" className="me_link_list">
            <div className="link_label">{t("financial_record")}</div>
            <div className="link_right_icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Link>
          <Link to="/change-password" className="me_link_list">
            <div className="link_label">{t("change_pass")}</div>
            <div className="link_right_icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Link>
          <a onClick={handleLogoutClick} className="me_link_list">
            <div className="link_label">{t("sign_out")}</div>
            <div className="link_right_icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </a>
        </div>

        {/* Modal */}
        <div
          className={`modal fade ${showModal ? "show d-block" : "d-none"}`}
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog me_modal" role="document">
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <h5 className="modal-title">Confirm Logout</h5>
              </div>
              <div className="modal-body text-center">
                <p>Are you sure you want to log out?</p>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirmLogout}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* support section */}
        {/* <SupportLink /> */}
        <CustomLoader />
        <Navbar />
      </div>
    </div>
  );
};

export default HomePage;
