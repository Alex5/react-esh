import React from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { setFoundIngredients,setIngrValue } from "../../redux/search-reducer";
import axios from "axios";

import "./Search.scss";
import Loader from "../../services/Loader";

import closeChip from "../../assets/img/cancel_black_24dp.svg";

const SearchIndgredients = ({
  filterIngredients,
  addChipItems,
  chipItems,
  loadingIngredients,
  setInputIngredients,
  inputIngredients,
  deleteChipItem,
}) => {
  const searchPopup = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 50 },
  });

  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.searchData.inputValue);
  const foundIngredients = useSelector(
    (state) => state.searchData.foundIngredients
  );

  const onIngInput = (value) => {
    dispatch(setIngrValue(value));
    if (inputValue.length >= 3) {
      axios
        .get(
          `https://intense-reef-89831.herokuapp.com/getIngredients/?q=${inputValue}`
        )
        .then((res) => {
          dispatch(setFoundIngredients(res.data));
        });
    } else {
      dispatch(setFoundIngredients([]));
    }
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
                <div
                  onClick={() => deleteChipItem(item)}
                  className="chip__delete-btn"
                >
                  <img src={closeChip} alt="" />
                </div>
              </div>
            ))}
        </div>
        <div className="search-popup__result">
          <ul>
            {loadingIngredients ? (
              <Loader />
            ) : (
              foundIngredients.map((item) => (
                <li onClick={() => addChipItems(item)} key={item._id}>
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
