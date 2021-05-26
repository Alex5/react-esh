import {FC} from 'react'
import {IIngredient} from "../../types/types";

interface IngredientItemProps {
    ingredient: IIngredient,
    onClick?: (item: {}) => void
}

const IngredientItem: FC<IngredientItemProps> = ({ingredient, onClick}) => {
    return (
        <li onClick={onClick}>{ingredient.name}</li>
    )
}

export default IngredientItem