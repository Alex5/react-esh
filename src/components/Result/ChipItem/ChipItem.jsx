import React from 'react'
import closeChip from "../../../assets/img/cancel_black_24dp.svg";

import {Chip, ChipFooter, ChipHeader} from './ChipItemStyle'
import {useDispatch, useSelector} from "react-redux"
import {excludeChip} from "../../../redux/searchSlice";

const ChipItem = ({item, onDeleteChip}) => {
    const dispatch = useDispatch()
    const chipItems = useSelector(state => state.search.chipItems)

    const [excludeItem, setExcludeItem] = React.useState(true)

    const onExclude = () => {
        dispatch(excludeChip(item.id))
    };

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
                    onClick={() => onExclude()}
                >
                    исключить
                </button>
            </ChipFooter>
        </Chip>
    )
}

export default ChipItem