import React from 'react'
import {Link, useLocation} from "react-router-dom";
import {FoundItemBody, FoundItemImage, FoundItemWrapper} from "./FoundItemStyle";


const FoundItem = ({item}) => {
    const location = useLocation()

    return (
        <FoundItemWrapper>
            <Link to={`${location.pathname}/${item._id}`} key={item._id}>
                <FoundItemImage>
                    <img
                        style={{backgroundSize: "cover"}}
                        src={item.recipeCover}
                        alt=""
                    />
                </FoundItemImage>
                <FoundItemBody>
                    <h1>{item.name}</h1>
                    <ul className="ingredients-result__body-item__body-lists">
                        <li>
                            <strong>{item.ingredients.length}</strong>{" "}
                            ингредиентов <span>ⓘ</span>
                        </li>
                        <li>
                            <strong>{item.portionsCount}</strong> порций
                        </li>
                        <li>Время приготовления:{" "}<strong>{item.recipeTime}</strong></li>
                    </ul>
                </FoundItemBody>
            </Link>
        </FoundItemWrapper>
    )
}

export default FoundItem;