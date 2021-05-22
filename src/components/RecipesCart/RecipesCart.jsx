import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

import Loader from "../../services/Loader";
import Button from "../../services/Button";

import "./RecipesCart.scss";
import noPhoto from "../../assets/img/no_photo.svg";

const RecipesCart = () => {
    const [instruction, setInstruction] = useState({});
    const [instructionLoad, setInstructionLoad] = useState(true);

    let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        axios
            .get(
                `https://intense-reef-89831.herokuapp.com/getRecipeInstruction/?id=${id}&source=eda.ru`
            )
            .then((res) => {
                setInstruction(res.data);
                setInstructionLoad(false);
            })
            .catch((ERR) => {
                alert(ERR);
            });
    }, [id]);

    return (
        <div>
            {instructionLoad ? (
                <Loader/>
            ) : (
                <div className="recipes-cart">

                        <Button secondary onClick={history.goBack}>Назад</Button>

                    <div className="recipes-cart__name">
                        <h1>{instruction.name}</h1>
                        <small className="source">
                            Источник: <a href="https://eda.ru/" target="_blank" rel="noreferrer">eda.ru</a>
                        </small>
                    </div>
                    <div className="recipes-cart__photos">
                        {instruction.photos.length === 0 ? (
                            <div style={{display: "flex", flexDirection: "column"}}>
                                Фото не добавлено
                                <img
                                    style={{height: "100px", marginBottom: "20px"}}
                                    src={noPhoto}
                                    alt=""
                                />
                                {/*<Button secondary text="Добавить фото"/>*/}
                            </div>
                        ) : (
                            instruction.photos.map((item) => (
                                <div className="recipes-cart__photos-item">
                                    <img height="400px" src={item} alt=""/>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="recipes-cart__description">
                        <p>{instruction.desription}</p>
                    </div>
                    <div className="recipes-cart__ingredients">
                        <h3>Ингредиенты:</h3>
                        <ul>
                            {instruction.ingredients.map((item) => (
                                <li>
                                    {item.name} {item.count} {item.countName}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="recipes-cart__steps">
                        <h3>Способ приготовления:</h3>
                        <div>
                            {instruction.steps.map((step, index) => (
                                <div key={index}>
                                    <strong>{index + 1}.</strong>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipesCart;
