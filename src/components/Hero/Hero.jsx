import React from "react";

import foodEat from "../../assets/img/foodEat.svg";
import closeChip from "../../assets/img/cancel_black_24dp.svg";

import "./Hero.scss";
import axios from "axios";

const Hero = ({ chipItems, deleteChipItem }) => {
  const onGetRecipes = () => {
    let newChipItems = [];

    chipItems.forEach((ingredients) => {
      newChipItems.push({
        id: ingredients._id,
        count: 0.0,
        exclude: false,
      });
    });
    console.log(newChipItems);

    let config = {
      method: 'post',
      url: "https://intense-reef-89831.herokuapp.com/getRecipes",
      data: newChipItems,
      params: {
        mode: 1,
      },
    };

    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((errot) => {
        console.log(errot);
      });
  };
  
  return (
    <section className="hero">
      <div className="hero-body">
        {chipItems && chipItems.length !== 0 ? (
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
            <button onClick={onGetRecipes}>Найти рецепты</button>
          </div>
        ) : (
          <div className="search-placeholder"></div>
        )}
      </div>
    </section>
  );
};

export default Hero;
