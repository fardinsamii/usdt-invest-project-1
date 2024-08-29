import React, { useState } from 'react';

// css import
import "../../assets/css/style.css";

const InviteLink = ({code , copyText}) => {
  const inviteLink = code;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setAlertMessage('Copied Successfully');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 2000); // Hide alert after 2 seconds
    }).catch(err => {
      setAlertMessage('Failed to copy');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 2000);
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="invite_code">
      <p id="inviteLink">{inviteLink}</p>
      <div className="copy_wrap">
        <button className="copy_btn" onClick={copyToClipboard}>{copyText}</button>
      </div>
      {alertVisible && <div className="custom_alert">{alertMessage}</div>}
    </div>
  );
};

export default InviteLink;