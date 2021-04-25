import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {setChips} from '../../redux/searchSlice'

import closeChip from "../../assets/img/cancel_black_24dp.svg";
import Loader from "../../services/Loader";

import "./Hero.scss";

const Hero = ({
  recipesState,
  loadingRecipes,
  onExclude,
}) => {
  const dispatch = useDispatch();
  const chipItems = useSelector((state) => state.search.chipItems);

  const onDeleteChip = (item) => {
    let deletingChipItems = new Set([...chipItems]);
    deletingChipItems.delete(item);
    dispatch(setChips([...deletingChipItems]));
  };

  return (
    <section className="hero">
      <div className="hero-body">
        {chipItems && chipItems.length !== 0 ? (
          <div className="hero-result">
            <div className="hero__header">
              <h3>Ингредиенты</h3>
            </div>
            <div className="added-chips">
              {chipItems.map((item) => (
                <div key={item._id} className="chip">
                  <div className="chip__header">
                    <div className="chip__header_title">{item.name}</div>
                    <button
                      onClick={() => onDeleteChip(item)}
                      className="chip__header_close-btn"
                    >
                      <img src={closeChip} alt="" />
                    </button>
                  </div>
                  {/* <div className="chip__body">
                    <label htmlFor="ingr-weight">Количество: {item.countName}</label>
                    <input
                      value={ingrCount}
                      onInput={(e) => {
                        setIngrCount(e.target.value);
                      }}
                      id="ingr-weight"
                      type="number"
                    />
                  </div> */}
                  <div className="chip__footer">
                    {/* <button>изменить</button> */}
                    <button
                      className={item.exclude ? "exclude" : ""}
                      onClick={() => onExclude(item._id)}
                    >
                      исключить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="search-placeholder"></div>
        )}
        {chipItems.length ? (
          <div className="added-chips__btn">
            <Link to="/ingredients/result">
              Найдено {loadingRecipes ? <Loader /> : recipesState.length}{" "}
              рецепта
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Hero;
