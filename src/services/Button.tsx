import React, {FC} from "react";
import styled from "styled-components";

interface ButtonProps {
    onClick?: () => void
    outline?: boolean
    small?: boolean
    icon?: string
    alt?: string
}

const Button: FC<ButtonProps> =
    ({
         children,
         onClick,
         icon,
         outline,
         small,
         alt
     }) => {

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
