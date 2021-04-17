import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Loader from "../../services/Loader";
import Button from '../../services/Button'

const RecipesCart = ({ resultOptions }) => {
  const [instruction, setInstruction] = useState({});
  const [instructionLoad, setInstructionLoad] = useState(true);

  let history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://intense-reef-89831.herokuapp.com/getRecipeInstruction/?id=${resultOptions.id}&source=eda.ru`
      )
      .then((res) => {
        console.log(res);
        setInstruction(res.data);
        setInstructionLoad(false);
      });
  }, [resultOptions]);

  return (
    <div>
      {instructionLoad ? (
        <Loader />
      ) : (
        <div>
          <div>
            <Button secondary onClick={history.goBack} text={"Назад"}></Button>
          </div>
          <div>
            <h1>{instruction.name}</h1>
            <small>
              Источник: <a href="https://eda.ru/">eda.ru</a>
            </small>
          </div>
          <div style={{ display: "flex" }}>
            {instruction.photos.map((item) => (
              <img height="400px" src={item} alt="" />
            ))}
          </div>
          <div>
            <p>{instruction.desription}</p>
          </div>
          <div>
            Ингредиенты:
            <ul>
              {resultOptions.ingredients.map((item) => (
                <li>
                  {item.name} {item.count} {item.countName}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div>Способ приготовления:</div>
            <div>
              {instruction.steps.map((step, index) => (
                <div key={index}>
                  <strong>{index}.</strong>
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