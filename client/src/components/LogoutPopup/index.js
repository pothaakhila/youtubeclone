import React from 'react';

const LogoutPopup = ({ logoutPage, cancelLogout }) => (
  <div className="logout-popup">
    <h1>Are you sure you want to logout?</h1>
    <button type="button" onClick={logoutPage} className="confirm-btn">
      Yes
    </button>
    <button type="button" onClick={cancelLogout} className="cancel-btn">
      No
    </button>
  </div>
);

export default LogoutPopup;
