import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Dashboard = () => {
  const [data, setData] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/auth/user");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid dashboard">
      <header className="header text-center py-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="marquee">
            <span>Earn activities: Invite friends to deposit</span>
          </div>
          <div>
            <select className="form-select">
              <option>English</option>
              <option>Other Language</option>
            </select>
          </div>
        </div>
        <h1>NIKE99.VIP</h1>
        <p>
          {t("welcome")} {data.name}
        </p>
        <p>{t("save_money_time")}</p>
        <div className="fw-bold">★★★★★ 5.0</div>
        <button className="btn btn-light mt-2">App</button>
      </header>

      <div className="actions my-3 d-flex justify-content-around">
        <button className="btn btn-warning">Recharge</button>
        <button className="btn btn-warning">Withdraw</button>
        <button className="btn btn-warning">Company Profile</button>
      </div>

      <div className="text-center">
        <img src="banner2.webp" alt="Banner" className="img-fluid mb-3" />
      </div>

      <div className="selection-period text-center py-3">
        <h2>Selection period</h2>
        <div className="d-flex justify-content-around">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Team size</h5>
              <p className="card-text">0</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Team recharge</h5>
              <p className="card-text">$0.00</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Team Withdrawal</h5>
              <p className="card-text">$0.00</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">New team</h5>
              <p className="card-text">0</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">First time recharge</h5>
              <p className="card-text">0</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">First withdrawal</h5>
              <p className="card-text">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-3">
        <h2>Task Hall</h2>
        <div className="d-flex justify-content-around">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Level 1</h5>
              <p className="card-text">Commission Percentage: 15%</p>
              <p className="card-text">Total Income: 0</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Level 2</h5>
              <p className="card-text">Commission Percentage: 2%</p>
              <p className="card-text">Total Income: 0</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Level 3</h5>
              <p className="card-text">Commission Percentage: 1%</p>
              <p className="card-text">Total Income: 0</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer py-3">
        <div className="d-flex justify-content-around">
          <button className="btn btn-light">Home</button>
          <button className="btn btn-light">Task</button>
          <button className="btn btn-light">VIP</button>
          <button className="btn btn-light">Me</button>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
