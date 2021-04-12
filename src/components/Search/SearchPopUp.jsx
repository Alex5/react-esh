import React from "react";
import { useHistory } from "react-router-dom";

import closeIcon from "../../assets/img/close_black_24dp.svg";
import closeChip from "../../assets/img/cancel_black_24dp.svg";

import "./Search.scss";
import axios from "axios";

const SearchPopUp = () => {
  let history = useHistory();

  const [filterIngredients, setFilterIngredients] = React.useState([]);

  const onIngrInput = (e) => {
    axios
      .get(
        `https://intense-reef-89831.herokuapp.com/getIngredients/?q=${e.target.value}`
      )
      .then((res) => {
        setFilterIngredients(res.data);
      });
  };

  const [chipItems, setChipItems] = React.useState([]);

  const addChipItems = (elem) => {
    let chipItemsArr = [...chipItems];
    chipItemsArr.push(elem);
    setChipItems(chipItemsArr)
  };

  return (
    <div className="search-popup">
      <div className="search-popup__body">
        <div className="search-popup__header">
          <div className="search-popup__header_title">Поиск ингредиентов</div>
          <div className="search-popup__header_close-btn">
            <button onClick={history.goBack}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="search-popup__input">
          <input type="search" onInput={(e) => onIngrInput(e)} />
        </div>
        <div className="search-popup__chips">
          {chipItems &&
            chipItems.map(item => (
              <div className="chip">
                <div className="chip__name">{item.name}</div>
                <div className="chip__delete-btn">
                  <img src={closeChip} alt="" />
                </div>
              </div>
            ))}
        </div>
        <div className="search-popup__result">
          <ul>
            {filterIngredients &&
              filterIngredients.map((item) => (
                <li onClick={() => addChipItems(item)} key={item._id}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPopUp;
