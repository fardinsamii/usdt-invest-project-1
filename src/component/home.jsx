import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// image 
import logo from "../assets/images/logo.webp";
import fdic from "../assets/images/662c6e61ddde.webp";
import finra from "../assets/images/662c6e56b8f7.webp";

// icon 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAnglesRight, faCoins } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
//component
import Navbar from "./partial/navbar";
import HomeTop from "./extra/topPartHome";
import SliderHome from "./extra/homeSlider";
import CountdownTimer from "./extra/CountdownTimer";
// import SupportLink from "./extra/supportLink";
import Announcement from "./extra/anouncement";
import CustomLoader from "./extra/customLoader";

const home = () => {
  const [data, setData] = useState({});
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Define an async function inside the useEffect hook
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint using axios
        const response = await axios.get("api/home");
        // Log the response to the console
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function immediately
    fetchData();
  }, []);
  const targetDate = new Date('2024-09-01T23:59:59');

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card p-4 shadow-lg" style={{ width: "720px" }}>
        <HomeTop />
     

        <div className="action_wrapper p-3">
          <div className="actions my-3 d-flex justify-content-around">
            
          <Link to='/recharge-method' className="action_link">
            <span className="action_icon"><FontAwesomeIcon icon={faCoins} /></span>
            <span className="action_label">{t("recharge")}</span>
          </Link>
          <Link to='/company-profile' className="action_link">
            <span className="action_icon"><FontAwesomeIcon icon={faBuilding} /></span>
            <span className="action_label">{t("company_profile")}</span>
          </Link>
          <Link to='/withdraw' className="action_link">
            <span className="action_icon"><FontAwesomeIcon icon={faRightFromBracket} /></span>
            <span className="action_label">{t("withdraw")}</span>
          </Link>
            
          </div>
          <div className="app_link_wrapp">
            <Link to="./" className="app_link">
              <span className="txt">{t("app")}</span>
              <span className="icn"><FontAwesomeIcon icon={faArrowRight} /></span>
            </Link>
          </div>
        </div> 
        <SliderHome />
        
        <div className="countdown_wrapp text-center">
          <CountdownTimer targetDate={targetDate} />
          <h5>{t("task_reset_countdown")}</h5>
        </div> 

        {/* New Section */}
        <div className="new-section p-3">
          <h5 className="title">{t("task_hall")}</h5>
          <div className="task-list">
          {data?.vips?.map((item, index) => (
              <div className="task-item d-flex mb-3" key={index}>
              <img src={logo} alt="Nike99 Logo" className="me-2" />
              <div className="text-start">
                <p className=" text-muted">VIP{item.id}</p>
                <p className="mb-0 amount_task">${item.requred_from} <span>Unlock amount:</span></p>
                <button className="btn-sm btn-success unlock_btn"><FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon></button>
              </div>
            </div>
            ))}


          
          </div>
        </div> 

        <div className="new-section p-3">
          <h5 className="title">{t("platform_introduction")}</h5>
          <div className="video">
          <iframe
            width="656"
            height="397"
            src="https://www.youtube.com/embed/hRdET2hJKnQ"
            title="“Vamos al renacimiento de una nueva PDVSA verdaderamente patria”."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>
        </div> 

        
        <div className="new-section p-3">
          <h5 className="title">{t("member_list")}</h5>
          <div className="member-list my-3">
            <div className="row gy-3">
              <div className="col-6">
                <div className="member_list_item">
                  <div className="row">
                    <div className="col-6">
                        <span className="member_level">VIP1</span>
                        <p>xlr*******@gmail.com</p>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <span className="amount">+$12,416.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-6 ends */}
              <div className="col-6">
                <div className="member_list_item">
                  <div className="row">
                    <div className="col-6">
                        <span className="member_level">VIP2</span>
                        <p>xlr*******@gmail.com</p>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <span className="amount">+$12,416.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-6 ends */}
              <div className="col-6">
                <div className="member_list_item">
                  <div className="row">
                    <div className="col-6">
                        <span className="member_level">VIP3</span>
                        <p>xlr*******@gmail.com</p>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <span className="amount">+$12,416.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-6 ends */}
              <div className="col-6">
                <div className="member_list_item">
                  <div className="row">
                    <div className="col-6">
                        <span className="member_level">VIP4</span>
                        <p>xlr*******@gmail.com</p>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <span className="amount">+$12,416.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-6 ends */}
            </div>
          </div>
        </div>

        <div className="new-section p-3">
          <h5 className="title">{t("regulatory_authority")}</h5>
          
          <div className="regulatory-authority">
            <div className="row">
              <div className="col-6">
                <img src={fdic} className="img-fluid" alt="FDIC" />
              </div>
              <div className="col-6">
                <img src={finra} className="img-fluid" alt="FINRA" />
              </div>
            </div>
            
          </div>
        </div>
        
        <Announcement />
        <CustomLoader />

        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}

        <br></br>
        <br></br>
        <br></br>

        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default home;
