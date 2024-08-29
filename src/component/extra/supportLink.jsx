// SupportLink.js
import React from 'react';
import supportImg from "../../assets/images/support.webp";
// css import
import "../../assets/css/style.css";

const SupportLink = () => {
  return (
    <div className="contact-suuport-options position-fixed end-0 p-3 fixed-position">
      <a href="https://t.me/your_telegram_link" className="d-block mb-3">
        <img
          src={supportImg}
          alt="Logo"
          className="circle_img"
        />
      </a>
    </div>
  );
};

export default SupportLink;
