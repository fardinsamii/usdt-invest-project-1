import { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter, Route, Routes } from "react-router-dom";

//all css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//all component
import Login from "./component/auth/login";
import PhoneLogin from "./component/auth/phone_login";
import EmailRegister from "./component/auth/email_register";
import PhoneRegister from "./component/auth/phone_register";
import Check from "./component/extra/check";
import CustomSnackbarProvider from "./component/extra/SnackbarProvider";
import PrivateRoute from "./component/auth/PrivateRoute";
import Loader from "./component/extra/loader";

// all protected routes
import Home from "./component/home";
import Me from "./component/me";
import Task from "./component/task";
import TaskCompleted from "./component/taskCompleted";
import Team from "./component/team";
import TeamDetails from "./component/teamDetails";
import Vip from "./component/vip";
import Recharge from "./component/recharge";
import RechargeMethod from "./component/rechargeMethod";
import RechargeTrx from "./component/rechargeTrx";
import Withdraw from "./component/withdraw";
import WithdrawTrx from "./component/withdrawTrx";
import Account from "./component/account";
import WithdrawRecord from "./component/withdrawRecord";
import CompanyProfile from "./component/companyProfile";
import Financial from "./component/financial";
import Notice from "./component/notice";
import NoticeContent from "./component/noticeContent";
import Basic from "./component/basic";
import ChangePassword from "./component/changePassword";

function App() {
 //  axios.defaults.baseURL = "http://localhost/trc20/nikapi/"; // local
  axios.defaults.baseURL = "https://tronkiss.com/"; // live
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Example: Loader will be shown for 2 seconds
  }, []);

  return (
    <div>
      <CustomSnackbarProvider>
        {isLoading ? (
          <Loader />
        ) : (
          <HashRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/phone-login" element={<PhoneLogin />} />
              <Route path="/register" element={<EmailRegister />} />
              <Route path="/phone-register" element={<PhoneRegister />} />
              <Route path="/check" element={<Check />} />

              {/* all protected routes */}
              <Route path="/home" element={<Home />} />
              <Route path="/me" element={<Me />} />
              <Route path="/task" element={<Task />} />
              <Route path="/task-completed" element={<TaskCompleted />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team-details" element={<TeamDetails />} />
              <Route path="/vip" element={<Vip />} />
              <Route path="/recharge" element={<Recharge />} />
              <Route path="/recharge-trx" element={<RechargeTrx />} />
              <Route path="/recharge-method" element={<RechargeMethod />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/withdraw-trx" element={<WithdrawTrx />} />
              <Route path="/account" element={<Account />} />
              <Route path="/withdraws" element={<WithdrawRecord />} />
              <Route path="/company-profile" element={<CompanyProfile />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/notice-content" element={<NoticeContent />} />
              <Route path="/basic" element={<Basic />} />
              <Route
                path="/change-password"
                element={
                  <PrivateRoute>
                    <ChangePassword />
                  </PrivateRoute>
                }
              />
            </Routes>
          </HashRouter>
        )}
      </CustomSnackbarProvider>
    </div>
  );
}

export default App;
