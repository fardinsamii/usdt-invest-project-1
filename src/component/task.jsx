
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/task.css";
import logo from "../assets/images/logo.webp";
//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import CountdownTimer from "./extra/CountdownTimer";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const task = () => {
  const targetDate = new Date('2024-09-01T23:59:59');
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/task");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toComplete = () => {
    const taskComplete = async () => {
      try {
        const response = await axios.get("api/task/complete");
        console.log(response.data);
        setAlertMessage("Task completed successfully");
        setAlertVisible(true);
        setTimeout(hideAlert, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    taskComplete();
  };

  const hideAlert = () => {
    setAlertVisible(false);
    navigate('/task-completed');
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card shadow-lg" style={{ width: "720px" }}>
        <div className="top_part p-4">
          <HeaderMain />
          <div className="text-center">
            <span className="count_header">
              <FontAwesomeIcon icon={faClock} /> {t("task_reset")}:{" "}
              <CountdownTimer targetDate={targetDate} />
            </span>
          </div>
          <div className="d-flex justify-content-around mt-2">
            <div className="text-white text-center task_count">
              <p>{t("all_tasks_for_today")}</p>
              <h5>{data?.product ? 1 : 0}</h5>
            </div>
            <div className="text-white text-center task_count">
              <p>{t("todays_remaining_tasks")}</p>
              <h5>{data?.product?.title || "0.00"}</h5>
            </div>
          </div>
        </div>

        <div className="task-actions text-center p-4 pb-0">
          <div>
            <ul className="nav nav-tabs justify-content-around">
              <li className="nav-item">
                <Link className="nav-link active" to="/task">
                  {t("in_progress")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task-completed">
                  {t("completed")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="tasks px-4">
          {data?.withdraw_status ? (
            <div className="vip_list_item mb-3">
              <div className="d-flex align-items-center">
                <div className="item_img">
                  <img
                    src={
                      data?.product?.image
                        ? `${axios.defaults.baseURL}${data.product.image}`
                        : logo
                    }
                    alt={data?.product?.title || "Product Image"}
                    className="me-2 w-100"
                  />
                </div>
                {alertVisible && (
                  <div className="custom_alert address_alert_copy">
                    {alertMessage}
                  </div>
                )}
                <div className="item_details">
                  <div className="row">
                    <div className="col-12">
                      <p className="mb-0 task_name">
                        {data?.product?.title || ""}
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="text-start">
                        <p className="mb-0 text-muted">{t("price")}</p>
                        <p className="mb-0 text-muted">{t("income")}</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <p className="mb-0 text-muted">
                          {data?.product?.price || ""}
                        </p>
                        <p className="mb-0 text-muted">
                          {parseFloat(data?.commission).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* d-flex ends */}
              <div className="text-end">
                <button className="price" onClick={toComplete}>
                  To Complete
                </button>
              </div>
            </div>
          ) : 
            <div className="vip_list_item mb-3">
                <h4 style={{fontSize: "12px",textAlign: "center", color: "red"}}>{t("no_task")}</h4>
            </div>
          }
        </div>

        <CustomLoader />
        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}
      </div>

      <Navbar />
    </div>
  );
};

export default task;
