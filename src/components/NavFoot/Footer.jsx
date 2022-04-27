import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Будьте с нами в: </p>
      <img
        className="img"
        width="40px"
        src="https://icon-library.com/images/instagram-icon-png-black/instagram-icon-png-black-28.jpg"
        alt=""
      />
      <img
        className="img"
        width="30px"
        src="http://assets.stickpng.com/images/5a4e2ef62da5ad73df7efe6e.png"
        alt=""
      />
      <img
        className="img"
        width="35px"
        src="https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png"
        alt=""
      />
    </div>
  );
};

export default Footer;
