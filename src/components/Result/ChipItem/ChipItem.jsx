import React from 'react'
import closeChip from "../../../assets/img/cancel_black_24dp.svg";

import {Chip, ChipFooter, ChipHeader} from './ChipItemStyle'
import {useDispatch} from "react-redux"
import {excludeChip} from "../../../redux/searchSlice";

const ChipItem = ({item, onDeleteChip}) => {
    const dispatch = useDispatch()

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
            <ChipFooter>
                {/*<button>изменить</button>*/}
                <button
                    style={{color: item.exclude ? 'red' : ''}}
                    onClick={() => dispatch(excludeChip(item.id))}
                >
                    исключить
                </button>
            </ChipFooter>
        </Chip>
    )
}

export default ChipItem