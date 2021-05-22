import React from "react";
import logo from "../../assets/img/esh-logo.svg";

import {Button, Search} from "../index";
import {StyledHeader, StyledLogo, StyledNav, StyledNavActions} from "./HeaderStyle";

const Header = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <StyledLogo src={logo} alt=""/>
                <Search/>
                {/*<StyledNavActions>*/}
                {/*   <Button>О проекте</Button>*/}
                {/*</StyledNavActions>*/}
            </StyledNav>
        </StyledHeader>
    );
};

export default Header;
