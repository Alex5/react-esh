import React from "react";
import styled from "styled-components";

const Button = ({children, onClick, outline,small, icon, alt}) => {
    const StyledButton = styled.button`
      padding: ${small ? '10px' : '15px'};
      border: 2px solid transparent;
      border-radius: 10px;
      color: ${outline ? 'gray' : 'white'};
      font-weight: 600;
      transition: 0.3s;
      cursor: pointer;
      background: ${outline ? 'none' : '#3a3a3a'};
      font-size: 14px;
      white-space: nowrap;
      border: ${outline ? '2px solid gray' : ''};

      a {
        color: white;
        text-decoration: none;
      }
    `

    return (
        <StyledButton onClick={onClick}>
            <img src={icon} alt={alt}/>
            {children}
        </StyledButton>
    );
};

export default Button;
