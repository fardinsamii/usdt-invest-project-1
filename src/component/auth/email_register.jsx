import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

// fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShare } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

//all css
import AuthTop from "../extra/authTopPart";
import "../../assets/css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/register.css";
import CustomLoader from "../extra/customLoader";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invitation_code, setInvitationcode] = useState("");
  const [password_confirmation, setPasswordconfirmation] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    invitation_code: "",
    password_confirmation: "",
  });
  const type = "email";
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation(); // useLocation hook to access the URL
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    // Parse the URL parameters
    const params = new URLSearchParams(location.search);
    const ic = params.get("ic"); // Get the invitation code from the URL
    
    if (ic) {
      localStorage.setItem("invitation_code", ic); // Store the invitation code in local storage
      setInvitationcode(ic); // Set the invitation code in state
    } else {
      // Check if the invitation code exists in local storage
      const storedIc = localStorage.getItem("invitation_code");
      if (storedIc) {
        setInvitationcode(storedIc); // Set the invitation code from local storage
      }
    }
  }, [location.search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email,
      password,
      invitation_code,
      password_confirmation,
      type,
    };

    try {
      setIsLoading(true);
      const response = await axios.post("api/register", formData);
      
      setErrors({
        email: response.data.message.email
          ? response.data.message.email[0]
          : "",
        password: response.data.message.password
          ? response.data.message.password[0]
          : "",
        password_confimation: response.data.message.password_confimation
          ? response.data.message.password_confimation[0]
          : "",
        invitation_code: response.data.message.invitation_code
          ? response.data.message.invitation_code[0]
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
    }catch (error) {
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
              <Link className="nav-link nav-link-reg active" to="/email-register">
                Register By Email
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-reg" to="/phone-register">
                Register By Phone
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
                      placeholder="Enter email"
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

                <div className="form-group">
                  <label htmlFor="password">Re-enter Password</label>
                  <div className="form_input_wrap">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Re-enter Password"
                      value={password_confirmation}
                      onChange={(e) => setPasswordconfirmation(e.target.value)}
                    />
                  </div>
                  
                  {errors.password_confirmation && (
                    <small className="text-danger">
                      {errors.password_confirmation}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Invitation Code</label>
                  <div className="form_input_wrap">
                    <FontAwesomeIcon icon={faShare} />
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Invitation Code"
                      value={invitation_code}
                      onChange={(e) => setInvitationcode(e.target.value)}
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
