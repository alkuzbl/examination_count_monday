import React from "react";
import {AlternativeSuperButton} from "../SuperButton/AlternativeSuperButton";
import style from './Count.module.scss'
import {Window} from "./Window/Window";

type CountPropsType = {
    numberCount: number
    disabledBtn: boolean
    onInk: () => void
    onReset: () => void
    errorWindowContent: string
    maxValue: number
    startValue: number
}

export const Count: React.FC<CountPropsType> = ({
                                                    disabledBtn,
                                                    onReset,
                                                    errorWindowContent,
                                                    numberCount,
                                                    onInk,
                                                    maxValue,
                                                    startValue
                                                }) => {
//ErrorStyles
    const styleWindowCount = numberCount === maxValue ? style.errorWin : style.counter__windowCount

    return (
        <div className={style.counter}>
            {
                disabledBtn ? <Window styleWindow={style.counter__window}
                                      styleContent={''}
                                      numberCount={errorWindowContent}/>
                    : <Window styleWindow={style.counter__window}
                              styleContent={styleWindowCount}
                              numberCount={numberCount}/>
            }


            <div className={style.counter__inner}>
                <AlternativeSuperButton styleBtn={style.counter__btnInk}
                                        name={'Ink'}
                                        disabled={disabledBtn ? true : numberCount === maxValue}
                                        callBack={onInk}/>
                <AlternativeSuperButton styleBtn={style.counter__btnReset}
                                        name={'Reset'}
                                        disabled={disabledBtn ? true : numberCount === startValue}
                                        callBack={onReset}/>
            </div>
        </div>
    )
}