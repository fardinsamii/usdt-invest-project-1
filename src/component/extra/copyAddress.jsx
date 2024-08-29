import React, { useState } from 'react';

// css import
import "../../assets/css/style.css";

const copyAddress = ({address}) => {
  const inviteLink = address;
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
    
      <div className="address-box">
        <span className="address">{inviteLink}</span>
        <button className="copy-button" onClick={copyToClipboard}>Copy</button>
        {alertVisible && <div className="custom_alert address_alert_copy">{alertMessage}</div>}
      </div>
      

  );
};

export default copyAddress;