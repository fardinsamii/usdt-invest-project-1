import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./component/auth/login";
import PhoneLogin from "./component/auth/phone_login";
import EmailRegister from "./component/auth/email_register";
import PhoneRegister from "./component/auth/phone_register";
import Home from "./component/home";
import Check from "./component/extra/check";
import axios from "axios";
import CustomSnackbarProvider from "./component/extra/SnackbarProvider";
import PrivateRoute from './PrivateRoute';
import Loader from './Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const checkAuth = () => {
      if (token) {
        navigate('/home'); // Redirect to home if token exists
      }
      setLoading(false); // Set loading to false after checking authentication
    };

    checkAuth();
  }, [token, navigate]);

  return (
    <div>
      <CustomSnackbarProvider>
        <BrowserRouter>
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/phone-login" element={<PhoneLogin />} />
              <Route path="/email-register" element={<EmailRegister />} />
              <Route path="/phone-register" element={<PhoneRegister />} />

              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/check"
                element={
                  <PrivateRoute>
                    <Check />
                  </PrivateRoute>
                }
              />
            </Routes>
          )}
        </BrowserRouter>
      </CustomSnackbarProvider>
    </div>
  );
}

export default App;
