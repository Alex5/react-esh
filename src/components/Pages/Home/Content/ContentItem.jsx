import {NavLink} from "react-router-dom";
import {
    StyledItem,
    StyledItemBody,
    StyledItemFooter,
    StyledItemHeader,
    StyledName,
    StyledPhoto,
    StyledRow
} from "./ContentItemStyle";

const ContentItem = ({_id, recipeCover, name}) => {
    return (
        <NavLink to={`/recipes/result/${_id}`}>
            <StyledRow>
                <StyledItem>
                    <StyledItemBody>
                        <img
                            src={recipeCover}
                            alt=""/>
                    </StyledItemBody>
                    <StyledItemFooter>{name}</StyledItemFooter>
                </StyledItem>
            </StyledRow>
        </NavLink>
    )
}

export default ContentItem
