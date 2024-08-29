import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/me.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/team.css";
import logo from "../assets/images/logo.webp";

//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import CopyCode from "./extra/copyCode";
import CopyLink from "./extra/copyLink";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";

import { useEffect, useState } from "react";
import axios from "axios";

const Team = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/auth/user");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const invitationLink = `${window.location.origin}/#/register?ic=${data.invitation_code || "000000"}`;

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div
        className="card login_reg_card team_card shadow-lg"
        style={{ width: "720px" }}
      >
        <div className="top_part p-4">
          <HeaderMain />
          <div className="team_details_top">
            <p>{t("invitation_code")}:</p>
            <CopyCode code={data.invitation_code || "000000"} copyText={t("copy")} />

            <p>{t("share_refer_txt")}</p>
            <CopyLink code={invitationLink} copyText={t("copy")} />
          </div>
        </div>

        <div className="team-actions p-4 text-center">
          <div className="container-card relative rd-$card-radius p-$mg c-$btn-text team-info">
            <div className="team_blnc_details">
              <div className="item">
                <div className="text-df">{t("team_size")}</div>
                <div className="txtBlue text-xl">0</div>
              </div>
              <div className="item">
                <div className="text-df">{t("team_recharge")}</div>
                <div className="txtBlue text-xl">$0.00</div>
              </div>
              <div className="item">
                <div className="text-df">{t("team_withdrawal")}</div>
                <div className="txtBlue text-xl">$0.00</div>
              </div>
              <div className="item">
                <div className="text-df">{t("new_team")}</div>
                <div className="txtBlue text-xl">0</div>
              </div>
              <div className="item">
                <div className="text-df">{t("first_time_recharge")}</div>
                <div className="txtBlue text-xl">0</div>
              </div>
              <div className="item">
                <div className="text-df">{t("first_wthdrawal")}</div>
                <div className="txtBlue text-xl">0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="team_card_action p-4 px-3">
          <div className="team-card">
            <div className="team-item">
              <div className="level-name">
                <div className="background_icon_card"></div>
                <div className="level-num"> LEV 1 </div>
              </div>
              <div className="level-content text-center text-light">
                <div className="level-count">
                  <div className="text-xs">{t("register_valid")}</div>
                  <div className="text-df">0/0</div>
                </div>
                <div className="level-count">
                  <div className="text-xs">{t("commission_percentage")}</div>
                  <div className="text-df">15% </div>
                </div>
                <div className="level-count">
                  <div className="text-xs">{t("total_income")}</div>
                  <div className="text-df">0</div>
                </div>
              </div>
              <Link to="/team-details" className="btn">
                {t("details")}
              </Link>
            </div>
            <div className="team-item">
              <div className="level-name">
                <div className="background_icon_card"></div>
                <div className="level-num"> LEV 2 </div>
              </div>
              <div className="level-content text-light text-center">
                <div className="level-count">
                  <div className="text-xs">{t("register_valid")}</div>
                  <div className="text-df">0/0</div>
                </div>
                <div className="level-count">
                  <div className="text-xs">{t("commission_percentage")}</div>
                  <div className="text-df">2% </div>
                </div>
                <div className="level-count">
                  <div className="text-xs">{t("total_income")}</div>
                  <div className="text-df">0</div>
                </div>
              </div>
              <Link to="/team-details" className="btn">
                {t("details")}
              </Link>
            </div>

            <div className="team-item">
              <div className="level-name">
                <div className="background_icon_card"></div>
                <div className="level-num"> LEV 3 </div>
              </div>
              <div className="level-content text-light text-center">
                <div className="level-count">
                  <div className="text-xs">{t("register_valid")}</div>
                  <div className="text-df">0/0</div>
                </div>
                <div className="level-count">
                  <div className="text-xs">{t("commission_percentage")}</div>
                  <div className="text-df">1% </div>
                </div>
                <div className="level-count">
                  <div className="text-xs">{t("total_income")}</div>
                  <div className="text-df">0</div>
                </div>
              </div>
              <Link to="/team-details" className="btn">
                {t("details")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CustomLoader />
      {/* <SupportLink /> */}
      <Navbar />
    </div>
  );
};

export default Team;
