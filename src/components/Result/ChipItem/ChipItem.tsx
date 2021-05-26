import React, {FC} from 'react'
import closeChip from "../../../assets/img/cancel_black_24dp.svg";

import {Chip, ChipFooter, ChipHeader} from './ChipItemStyle'
import {useDispatch, useSelector} from "react-redux"
import {excludeChip, setChips} from "../../../redux/searchSlice";
import {IChip} from "../../../types/types";

interface ChipItemProps {
    chip: IChip
}

const ChipItem: FC<ChipItemProps> = ({chip}) => {
    const dispatch = useDispatch()
    // const chipItems = useSelector((state) => state.search.chipItems);
    //
    // const onDeleteChip = (chipItem) => {
    //     let newChipItems = new Set([...chipItems])
    //     newChipItems.delete(chipItem)
    //     dispatch(setChips([...newChipItems]))
    // };

    return (
        <Chip>
            <ChipHeader className="chip__header">
                <span>{chip.name}</span>
                <button
                    // onClick={() => onDeleteChip(chip)}
                    className="chip__header_close-btn"
                >
                    <img src={closeChip} alt=""/>
                </button>
            </ChipHeader>
            <ChipFooter>
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