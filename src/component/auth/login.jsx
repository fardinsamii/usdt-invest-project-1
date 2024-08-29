import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import AuthTop from "../extra/authTopPart";
import CustomLoader from "../extra/customLoader";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const type = "email";
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { email, password, type };

    try {
      setIsLoading(true);
      const response = await axios.post("api/login", formData);

      setErrors({
        email: response.data.message.email
          ? response.data.message.email[0]
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
      <div className="card login_reg_card p-4 shadow-lg" style={{ width: "720px" }}>
      {isLoading && <CustomLoader />} {/* Conditional rendering of the loader */}
        <AuthTop />
        <div className="login_register_body login_body">
          <ul className="nav nav-tabs justify-content-around">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Email Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/phone-login">
                Phone Login
              </Link>
            </li>
          </ul>
          
          <div className="tab-content">
            <div className="tab-pane fade show active" id="emailLogin">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="form_input_wrap">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="form_input_wrap">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
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
                    className="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckChecked" 
                    defaultChecked 
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Agree with our <a href="#">Terms of use</a> and <a href="#">Privacy agreement</a>
                  </label>
                </div>
                <div className="login-tools">
                <div className="text-center mt-2">
                  <button type="submit" className="btn active btn-block">
                    Sign In
                  </button>
                </div>
                <div className="text-center mt-2">
                <Link to="/register" className="btn btn-warning btn-block">
                  Sign Up
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
