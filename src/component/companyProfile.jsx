//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

//all css/images
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/recharge.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/images/logo.webp";

//component
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";
const companyProfile = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card account_card shadow-lg" style={{ width: "720px" }}>
      <header className="header text-white text-center py-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <a onClick={handleBackClick}>
              <FontAwesomeIcon icon={faChevronLeft} className="back-arrow" />
            </a>
          </div>
        </div>
      </header>
      <div className="finiancial-actions p-4 text-center">
        <div className="container-card p-4 relative rd-$card-radius p-$mg c-$btn-text">
          <div className="title mb-20px text-lg">Company Profile</div>
          <div className="content_company">
            <p>
              <span>
                We connect people and build communities, creating economic
                opportunity for all.{" "}
              </span>
            </p>
            <p>
              At Nike, we create ways to connect millions of sellers and buyers
              in more than 190 marketplaces around the world. Our technology
              empowers our customers and gives everyone the opportunity to grow
              and develop - no matter who they are or where they are in the
              world. The ripple effects of our work create waves of change for
              our customers, our companies, our communities and our planet.{" "}
            </p>
            <p>
              <img src={logo} className="company_logo"></img>
            </p>
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

export default companyProfile;
