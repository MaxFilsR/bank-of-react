import React, { useEffect } from "react";
import "./ErrorPopup.css";

const ErrorPopup = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000); // hide after 3 seconds

    return () => clearTimeout(timer);
  }, [visible, onClose]);

  return (
    <div className={`error-popup ${visible ? "show" : ""}`}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPopup;
