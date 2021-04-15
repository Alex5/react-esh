import React from "react";
import { Link } from "react-router-dom";

import closeChip from "../../assets/img/cancel_black_24dp.svg";
import Loader from "../../services/Loader";

import "./Hero.scss";

const Hero = ({ chipItems, deleteChipItem, recipesState, loadingRecipes }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        {chipItems && chipItems.length !== 0 ? (
          <div>
            <div className="hero__header">
              <h3>Ингредиенты</h3>
            </div>
            <div className="added-chips">
              {chipItems.map((item) => (
                <div key={item._id} className="chip">
                  <div className="chip__header">
                    <div className="chip__header_title">{item.name}</div>
                    <button
                      onClick={() => deleteChipItem(item)}
                      className="chip__header_close-btn"
                    >
                      <img src={closeChip} alt="" />
                    </button>
                  </div>
                  {/* <div className="chip__body">
                      <label htmlFor="ingr-weight">Вес</label>
                    <input id="ingr-weight" type="number"/>
                    </div>  */}
                  <div className="chip__footer">
                    <button>изменить</button>
                    <button>исключить</button>
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
