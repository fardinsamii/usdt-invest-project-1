import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/task.css";
import logo from "../assets/images/logo.webp";
// component
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

const Task = () => {
  const targetDate = new Date("2024-09-20T23:59:59");
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/tradings");
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
              <h5>33061</h5>
            </div>
            <div className="text-white text-center task_count">
              <p>{t("todays_remaining_tasks")}</p>
              <h5>61.00</h5>
            </div>
          </div>
        </div>

        <div className="task-actions text-center p-4">
          <div>
            <ul className="nav nav-tabs justify-content-around">
              <li className="nav-item">
                <Link className="nav-link" to="/task">
                  {t("in_progress")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/task-completed">
                  {t("completed")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="tasks text-start">
            {data.length > 0 ? (
              data.map((trading) => (
                <div key={trading.id} className="vip_list_item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="item_img">
                      <img
                        src={`${axios.defaults.baseURL}${trading.product.image}`} // Replace with trading.product.image if you want to use the product image
                        alt={trading.product.title}
                        className="me-2 w-100"
                      />
                    </div>
                    <div className="item_details">
                      <div className="row">
                        <div className="col-12">
                          <p className="mb-0 task_name">
                            {trading.product.title}
                          </p>
                        </div>
                        <div className="col-6">
                          <div className="text-start">
                            <p className="mb-0 text-muted">{t("price")}</p>
                            <p className="mb-0 text-muted">{t("income")}</p>
                            <p className="mb-0 text-muted">
                              {t("completed_time")}
                            </p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="text-end">
                            <p className="mb-0 text-muted">
                              {trading.product.price}
                            </p>
                            <p className="mb-0 text-muted">{trading.amount}</p>
                            <p className="mb-0 text-muted">
                              {new Date(trading.created_at).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="vip_list_item mb-3">
                <h4 style={{fontSize: "12px",textAlign: "center", color: "red"}}>{t("no_task")}</h4>
              </div>
            )}
          </div>
        </div>

        {/* <SupportLink /> */}
      </div>

      <Navbar />
    </div>
  );
};

export default Task;
