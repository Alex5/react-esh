import {FC} from 'react'
import {IIngredient} from "../../types/types";

interface IngredientItemProps {
    ingredient: IIngredient
}

const IngredientItem: FC<IngredientItemProps> = ({ingredient}) => {
    return (
        <li>{ingredient.name}</li>
    )
}

export default IngredientItem