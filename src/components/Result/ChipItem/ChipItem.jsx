import React from 'react'
import closeChip from "../../../assets/img/cancel_black_24dp.svg";

import {Chip, ChipHeader} from './ChipItemStyle'

const ChipItem = ({item, onDeleteChip}) => {
    return (
        <Chip>
            <ChipHeader className="chip__header">
                <span>{item.name}</span>
                <button
                    onClick={() => onDeleteChip(item)}
                    className="chip__header_close-btn"
                >
                    <img src={closeChip} alt=""/>
                </button>
            </ChipHeader>
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
            {/* <div className="chip__footer">
                    <button>изменить</button>
                    <button
                      className={item.exclude ? "exclude" : ""}
                      onClick={() => onExclude(item._id)}
                    >
                      исключить
                    </button>
                  </div> */}
        </Chip>
        )
}

export  default ChipItem