import React from 'react'
import {
    RecipesItem,
    RecipesItemImage,
    RecipesItemInfo,
    RecipesItemInfoBody, RecipesItemInfoFooter,
    RecipesItemInfoHeader
} from "./RecimeItemStyle";

const RecipeItem = ({recipeCover, name, recipeTime, portionsCount, ingredients}) => {
    return (
        <RecipesItem>
            <RecipesItemImage>
                <img src={recipeCover} alt={name}/>
            </RecipesItemImage>
            <RecipesItemInfo>
                <RecipesItemInfoHeader>
                    <span>{name}</span>
                </RecipesItemInfoHeader>
                <RecipesItemInfoBody>
                    <span>Время приготовления <b>{recipeTime}</b></span>
                    <span>Порций <b>{portionsCount}</b></span>
                </RecipesItemInfoBody>
                <RecipesItemInfoFooter>
                    {ingredients.map(el => (
                        <span>{el.name} </span>
                    ))}
                </RecipesItemInfoFooter>
            </RecipesItemInfo>
        </RecipesItem>
    )
}

export default RecipeItem;