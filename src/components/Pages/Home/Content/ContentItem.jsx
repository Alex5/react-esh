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

const ContentItem = ({_id, recipeTag, recipeCover, name}) => {
    return (
        <NavLink to={`/recipes/result/${_id}`}>
            <StyledRow>
                <StyledItem>
                    <StyledItemHeader>
                        {/*<StyledPhoto>*/}
                        {/*    <img*/}
                        {/*        src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380"*/}
                        {/*        alt=""/>*/}
                        {/*</StyledPhoto>*/}
                        {/*<StyledName>Ирина {recipeTag.kitchen}</StyledName>*/}
                    </StyledItemHeader>
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
