import React, {useState} from "react";
import {AlternativeSuperButton} from "./SuperButton/AlternativeSuperButton";
import style from './Count.module.scss'

type CountPropsType = {
    numberCount: number
    onInk: () => void
    onReset: () => void
    styleWindow: string
    error: boolean
    styleReset: string
}

export const Count: React.FC<CountPropsType> = ({numberCount, onInk, onReset, styleWindow, error, styleReset}) => {

    return (
        <div className={style.counter}>
            <div className={styleWindow}>
                {numberCount}
            </div>
            <div className={style.counter__inner}>
                <AlternativeSuperButton styleBtn={style.counter__btnInk}
                                        name={'Ink'}
                                        disabled={error}
                                        callBack={onInk}/>
                <AlternativeSuperButton styleBtn={styleReset}
                                        name={'Reset'}
                                        disabled={numberCount > 0 && numberCount < 5 ? error : !error}
                                        callBack={onReset}/>
            </div>
        </div>
    )
}