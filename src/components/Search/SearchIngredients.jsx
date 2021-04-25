import React from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import {
  foundIngredient,
  onIngrInput,
  setChips,
} from "../../redux/searchSlice";
import { searchAPI } from "../../api/Api";

import "./Search.scss";
import Loader from "../../services/Loader";

import closeChip from "../../assets/img/cancel_black_24dp.svg";

const SearchIndgredients = ({ loadingIngredients, deleteChipItem }) => {
  const searchPopup = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 30 },
  });

  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.search.inputValue);
  const foundIngredients = useSelector(
    (state) => state.search.foundIngredients
  );
  const chipItems = useSelector((state) => state.search.chipItems);

  const onIngInput = (value) => {
    dispatch(onIngrInput(value));
    if (inputValue.length >= 3) {
      searchAPI
        .getIngredients(inputValue)
        .then((res) => dispatch(foundIngredient(res.data)));
    } else {
      dispatch(foundIngredient([]));
    }
  };

  const onAddChip = (item) => {
    let chipItemsArr = new Set([...chipItems]);
    chipItemsArr.add(item);
    dispatch(setChips([...chipItemsArr]));
  };

  return (
    <animated.div style={searchPopup} className="search-popup">
      <div className="search-popup__body">
        <div className="search-popup__header">
          <div className="search-popup__header_title">Поиск ингредиентов</div>
          <div className="search-popup__header_close-btn"></div>
        </div>
        <div className="search-popup__input">
          <input
            placeholder="Введите название ингредиента"
            value={inputValue}
            type="search"
            onInput={(e) => onIngInput(e.target.value)}
          />
        </div>
        <div className="search-popup__chips">
          {chipItems &&
            chipItems.map((item) => (
              <div key={item._id} className="chip">
                <div className="chip__name">{item.name}</div>
                {/* <div
                  onClick={() => onDeleteChip(item)}
                  className="chip__delete-btn"
                >
                  <img src={closeChip} alt="" />
                </div> */}
              </div>
            ))}
        </div>
        <div className="search-popup__result">
          <ul>
            {loadingIngredients ? (
              <Loader />
            ) : (
              foundIngredients.map((item) => (
                <li onClick={() => onAddChip(item)} key={item._id}>
                  {item.name}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </animated.div>
  );
};

export default SearchIndgredients;
