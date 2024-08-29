import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

// fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faShare } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// All CSS
import AuthTop from "../extra/authTopPart";
import "../../assets/css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/register.css";
import CustomLoader from "../extra/customLoader";

function App() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [invitation_code, setInvitationCode] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
    invitation_code: "",
    password_confirmation: "",
  });
  const type = "phone";
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ic = params.get("ic");
    
    if (ic) {
      localStorage.setItem("invitation_code", ic);
      setInvitationCode(ic);
    } else {
      const storedIc = localStorage.getItem("invitation_code");
      if (storedIc) {
        setInvitationCode(storedIc);
      }
    }
  }, [location.search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      phone,
      password,
      invitation_code,
      password_confirmation,
      type,
    };

    try {
      setIsLoading(true);
      const response = await axios.post("api/register", formData);
      
      setErrors({
        phone: response.data.message.phone
          ? response.data.message.phone[0]
          : "",
        password: response.data.message.password
          ? response.data.message.password[0]
          : "",
        password_confirmation: response.data.message.password_confirmation
          ? response.data.message.password_confirmation[0]
          : "",
        invitation_code: response.data.message.invitation_code
          ? response.data.message.invitation_code[0]
          : "",
      });

      if (response.data.message === "Unauthorised") {
        enqueueSnackbar("These credentials do not match", { variant: "error" });
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

        <div className="login_register_body">
          <ul className="nav nav-tabs justify-content-around">
            <li className="nav-item">
              <Link className="nav-link nav-link-reg" to="/register">
                Register By Email
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-reg active" to="/phone-register">
                Register By Phone
              </Link>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="phoneRegister">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <div className="form_input_wrap">
                    <FontAwesomeIcon icon={faMobile} />
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  
                  {errors.phone && (
                    <small className="text-danger">{errors.phone}</small>
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

                <div className="form-group">
                  <label htmlFor="password_confirmation">Re-enter Password</label>
                  <div className="form_input_wrap">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                      type="password"
                      className="form-control"
                      id="password_confirmation"
                      placeholder="Re-enter Password"
                      value={password_confirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                  </div>
                  
                  {errors.password_confirmation && (
                    <small className="text-danger">
                      {errors.password_confirmation}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="invitation_code">Invitation Code</label>
                  <div className="form_input_wrap">
                    <FontAwesomeIcon icon={faShare} />
                    <input
                      type="text"
                      className="form-control"
                      id="invitation_code"
                      placeholder="Invitation Code"
                      value={invitation_code}
                      onChange={(e) => setInvitationCode(e.target.value)}
                    />
                  </div>
                  
                  {errors.invitation_code && (
                    <small className="text-danger">
                      {errors.invitation_code}
                    </small>
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
                    Agree with our <a href="#">Terms of Use</a> and <a href="#">Privacy Agreement</a>
                  </label>
                </div>

                <div className="login-tools">
                  <div className="text-center mt-2">
                    <button type="submit" className="btn active btn-block">
                      Sign Up
                    </button>
                  </div>
                  <div className="text-center mt-2">
                    <Link to="/" className="btn btn-block">
                      Sign In
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
