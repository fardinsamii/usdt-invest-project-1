import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "../assets/css/recharge.css";
import "../assets/css/finiancial.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import SingleHeader from "./extra/SingleHeader";

const Basic = () => {
  const navigate = useNavigate();
  const [withdrawals, setWithdrawals] = useState([]); // State to hold withdrawal data
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/withdraws");
        setWithdrawals(response.data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const handleBackClick = () => {
    navigate('/me'); // Navigate to the previous page
  };
  const formatDate = (dateString) => {
    return moment(dateString).format('MMMM DD, YYYY, HH:mm:ss');
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
        <div
          className="card login_reg_card account_card shadow-lg"
          style={{ width: "720px" }}
        >
          <SingleHeader backPage={"/me"}></SingleHeader>
        

          <div className="finiancial-actions p-4 text-center">
            <div className="container-card p-4 relative rd-$card-radius p-$mg c-$btn-text">
              <div className="custom_tab_record">
                <ul
                  className="nav nav-tabs justify-content-around"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <Link to="/financial" className="nav-link" type="button">
                      Basic account
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link to="/basic" className="nav-link withdraw-link active">
                      Withdrawal account
                    </Link>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    {isLoading ? (
                      <CustomLoader /> // Show loader while data is being fetched
                    ) : withdrawals.length > 0 ? (
                      withdrawals.map((withdrawal, index) => (
                        <div key={index} className="financial_record row align-items-center mb-3">
                          <div className="col-7 text-start">
                            <p className="financial_lebel mb-0">Task benefits</p>
                            <p className="date mb-0">{formatDate(withdrawal.created_at)}</p>
                          </div>
                          <div className="col-5 text-end">
                            <div className="record_amount">
                              <p className={`mb-0 ${withdrawal.amount > 0 ? 'text-green' : 'text-red'}`}>
                                {withdrawal.amount} USDT
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                      
                    ) : (
                      <span className="no_data">No Data</span> // Display when there's no data
                    )}
                  
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <span className="no_data">No Data...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CustomLoader />
        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}
      </div>
    </div>
  );
};

export default Basic;
