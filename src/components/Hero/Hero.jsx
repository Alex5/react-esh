import React from "react";

import foodEat from "../../assets/img/foodEat.svg";
import closeChip from "../../assets/img/cancel_black_24dp.svg";

import "./Hero.scss";

const Hero = ({chipItems, deleteChipItem}) => {
  return (
    <section className="hero">
      <div className="hero-body">
        {chipItems && chipItems.length !== 0 ? (
          <div className="added-chips">
            {chipItems.map((item) => (
              <div key={item._id} className="chip">
                <div className="chip__header">
                  <div className="chip__header_title">{item.name}</div>
                  <button onClick={() => deleteChipItem(item)} className="chip__header_close-btn">
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
        ) : (
          <div className="search-placeholder">
            
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
