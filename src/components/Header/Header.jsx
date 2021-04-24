import React from "react";

import Button from "../../services/Button";

import logo from "../../assets/img/esh-logo.svg";
import userLogin from "../../assets/img/user_login.svg";

import "./Header.scss";
import "../../App.scss";

const Header = () => {
  return (
    <header className="header">
        <nav className="header__container">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          {/* <div className="header__action">
            <Button secondarySquare icon={userLogin} alt={"Регистраци"}/>
          </div> */}
        </nav>
    </header>
  );
};

export default Header;
