import React from 'react'
import closeChip from "../../../assets/img/cancel_black_24dp.svg";

import {Chip, ChipFooter, ChipHeader} from './ChipItemStyle'
import {useDispatch, useSelector} from "react-redux"
import {excludeChip, setChips, setRecipes} from "../../../redux/searchSlice";

const ChipItem = ({chip}) => {
    const dispatch = useDispatch()
    const chipItems = useSelector((state) => state.search.chipItems);

    const onDeleteChip = (chipItem) => {
        let newChipItems = new Set([...chipItems])
        newChipItems.delete(chipItem)
        dispatch(setChips([...newChipItems]))

        if (chipItems.length === 0) {
            dispatch(setRecipes([]))
        }
    };

    return (
        <Chip>
            <ChipHeader className="chip__header">
                <span>{chip.name}</span>
                <button
                    onClick={() => onDeleteChip(chip)}
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
                    style={{color: chip.exclude ? 'red' : ''}}
                    onClick={() => dispatch(excludeChip(chip.id))}
                >
                    исключить
                </button>
            </ChipFooter>
        </Chip>
    )
}

export default ChipItem