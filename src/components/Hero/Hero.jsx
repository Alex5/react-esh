import React from "react";
import { Link, Route } from "react-router-dom";

import closeChip from "../../assets/img/cancel_black_24dp.svg";

import "./Hero.scss";

const Hero = ({ chipItems, deleteChipItem, onGetRecipes }) => {
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
                    <div className="chip__body">Вес: 15кг</div>
                    <div className="chip__footer">
                      <div>изменить</div>
                      <div>исключить</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="search-placeholder"></div>
          )}
          {chipItems.length ? (
            <Link to="/ingredients/result" className="added-chips__btn">
              <button onClick={onGetRecipes}>Показать результаты</button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </section>
    
  );
};

export default Hero;
