import {StyledWrapper} from "./SearchPopupStyle";
import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {setActivePopup} from "../../../redux/servicesSlice";

const SearchPopup = () => {
    const dispatch = useDispatch()
    const activePopup = useSelector(state => state.services.activePopup)
    return (
        <StyledWrapper onClick={() => dispatch(setActivePopup(false))}
                       activePopup={activePopup}
        />
    )
}

export default SearchPopup;