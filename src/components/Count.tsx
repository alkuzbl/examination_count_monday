import React, {useState} from "react";
import {AlternativeSuperButton} from "./SuperButton/AlternativeSuperButton";
import style from './Count.module.scss'
import {Window} from "./Window/Window";

type CountPropsType = {
    numberCount: number
    onInk: () => void
    onReset: () => void
    startValue: number
    maxValue: number
}

export const Count: React.FC<CountPropsType> = ({numberCount,
                                                    onInk,
                                                    onReset,
                                                    startValue,
                                                    maxValue}) => {


    const styleReset = numberCount !== maxValue ? style.counter__btnReset : style.error
    const styleWindow = numberCount !== maxValue ? style.counter__window : style.errorWin
    const disableOnInk = numberCount === maxValue
    const disableReset = numberCount > maxValue || numberCount === startValue

    return (
        <div className={style.counter}>

            <Window styleWindow={styleWindow}
                    numberCount={numberCount} />

            <div className={style.counter__inner}>
                <AlternativeSuperButton styleBtn={style.counter__btnInk}
                                        name={'Ink'}
                                        disabled={disableOnInk}
                                        callBack={onInk}/>
                <AlternativeSuperButton styleBtn={styleReset}
                                        name={'Reset'}
                                        disabled={disableReset}
                                        callBack={onReset}/>
            </div>
        </div>
    )
}