import React from "react";

import closeChip from "../../assets/img/cancel_black_24dp.svg";

import "./Search.scss";

const SearchPopUp = ({
  filterIngredients,
  onIngrInput,
  addChipItems,
  chipItems,
  loadingIngredients
}) => {
  return (
    <div className="search-popup">
      <div className="search-popup__body">
        <div className="search-popup__header">
          <div className="search-popup__header_title">Поиск ингредиентов</div>
          <div className="search-popup__header_close-btn"></div>
        </div>
        <div className="search-popup__input">
          <input type="search" onInput={(e) => onIngrInput(e)} />
        </div>
        <div className="search-popup__chips">
          {chipItems &&
            chipItems.map((item) => (
              <div key={item._id} className="chip">
                <div className="chip__name">{item.name}</div>
                <div className="chip__delete-btn">
                  <img src={closeChip} alt="" />
                </div>
              </div>
            ))}
        </div>
        <div className="search-popup__result">
          <ul>
            {loadingIngredients ? 'Загрузка...' : filterIngredients &&
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
