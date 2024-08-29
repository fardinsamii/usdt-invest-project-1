import React, { useState } from 'react';

// css import
import "../../assets/css/style.css";

const InviteCode = ({code , copyText}) => {
  const inviteCode = code;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteCode).then(() => {
      setAlertMessage('Copied Successfully');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 20000); // Hide alert after 2 seconds
    }).catch(err => {
      setAlertMessage('Failed to copy');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 20000);
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="invite_code">
      <h5 id="inviteCode">{inviteCode}</h5>
      <div className="copy_wrap">
        <button className="copy_btn" onClick={copyToClipboard}>{copyText}</button>
      </div>
      {alertVisible && <div className="custom_alert">{alertMessage}</div>}
    </div>
  );
};

export default InviteCode;