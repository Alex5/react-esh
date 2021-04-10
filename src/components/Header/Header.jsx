import React from "react";

import logo from '../../assets/img/esh-logo.svg'

import './Header.scss'

const Header = () => {

  return (
    <header className="header">
            <div className="header__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="header__menu">
                <div>-</div>
                <div>-</div>
                <div>-</div>
            </div>
    </header>
  );
}

export default Header;