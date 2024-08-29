import { Link } from "react-router-dom";
import "../../assets/css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import AuthTop from "../extra/authTopPart";
import CustomLoader from "../extra/customLoader";

function App() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ phone: "", password: "" });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const type = "phone";
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { phone, password, type };
    console.log(formData)
    try {
      setIsLoading(true);
      const response = await axios.post("api/login", formData);

      setErrors({
        phone: response.data.message.phone
          ? response.data.message.phone[0]
          : "",
        password: response.data.message.password
          ? response.data.message.password[0]
          : "",
      });

      if (response.data.message === "Unauthorised") {
        enqueueSnackbar("This credential do not match", { variant: "error" });
      }

      if (response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.data.token}`;
        navigate("/home");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Hide loader after data is fetched
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card p-4 login_reg_card shadow-lg" style={{ width: "720px" }}>
      {isLoading && <CustomLoader />} {/* Conditional rendering of the loader */}
         <AuthTop />


          <div className="login_register_body login_body">
            <ul className="nav nav-tabs justify-content-around">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {t("email_login")}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link active" to="/phone-login">
              {t("phone_login")}
              </Link>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="emailLogin">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="phone">{t("phone")}</label>
                  <div className="form_input_wrap">
                    <FontAwesomeIcon icon={faMobile} />
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder={t("phone")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  
                  {errors.phone && (
                    <small className="text-danger">{errors.phone}</small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">{t("password")}</label>
                  <div className="form_input_wrap">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder={t("password")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </div>

                <div className="form-check d-flex justify-content-center mt-3 login_reg_check">
                  <input 
                    className="form-check-input mb-0" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckChecked" 
                    defaultChecked 
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    {t("agree_with_our")} <a href="#">{t("terms_of_use")}</a> {t("and")} <a href="#">{t("privacy_agreement")}</a>
                  </label>
                </div>

                <div className="login-tools">
                  <div className="text-center mt-2">
                    <button type="submit" className="btn active btn-block">
                      {t("sign_in")}
                    </button>
                  </div>
                  <div className="text-center mt-2">
                  <Link
                    to="/phone-register"
                    className="btn btn-warning btn-block"
                  >
                    {t("sign_up")}
                  </Link>
                  </div>
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
