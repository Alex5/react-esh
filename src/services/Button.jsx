import React from "react";
import {StyledButton} from './ButtonStyle';
import {useHistory} from 'react-router-dom'

const Button = ({children, onClick, secondary, icon, secondarySquare, alt}) => {
    // const [className, setClassName] = React.useState("");
    //
    // React.useEffect(() => {
    //   switch (true) {
    //     case secondarySquare:
    //       setClassName("secondary square");
    //       break;
    //     case secondary:
    //       setClassName("secondary");
    //       break;
    //     default:
    //       setClassName("primary");
    //       break;
    //   }
    // }, [secondary, secondarySquare]);

    return (
        <StyledButton onClick={onClick}>
            <img src={icon} alt={alt}/>
            {children}
        </StyledButton>
    );
};

export default Button;
