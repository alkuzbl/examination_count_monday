import React from "react";
import {AlternativeSuperButton} from "../SuperButton/AlternativeSuperButton";
import style from '../Count/Count.module.scss'
import {SuperInputNumber} from "../SuperInputNumber";


type CountPropsType = {
    maxValue: number
    startValue: number
    disabledBtn: boolean
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    setInkStart: () => void
}

export const SetCount: React.FC<CountPropsType> = ({
                                                       maxValue,
                                                       setInkStart,
                                                       startValue,
                                                       changeStartValue,
                                                       changeMaxValue,
                                                       disabledBtn
                                                   }) => {
// Error styles
    const disabledValue = startValue === maxValue || startValue > maxValue || maxValue < 0 || startValue < 0 ? disabledBtn : !disabledBtn
    const styleInputMax = maxValue < 0 || maxValue <= startValue ? style.errorInput : style.setCounter__windowsInput
    const styleInputStart = startValue < 0 || maxValue <= startValue ? style.errorInput : style.setCounter__windowsInput

    return (
        <div className={style.counter}>
            <div className={style.counter__window}>
                <div className={style.setCounter__windowsInner}>
                    <span className={style.setCounter__windowsSpan}>Max value</span>
                    <SuperInputNumber callBackOnChange={changeMaxValue}
                                      value={maxValue}
                                      styleInput={styleInputMax}/>

                </div>
                <div className={style.setCounter__windowsInner}>
                    <span className={style.setCounter__windowsSpan}>Start value</span>
                    <SuperInputNumber callBackOnChange={changeStartValue}
                                      value={startValue}
                                      styleInput={styleInputStart}/>
                </div>
            </div>
            <div className={style.counter__inner}>
                <AlternativeSuperButton styleBtn={style.counter__btnInk}
                                        name={'Set'}
                                        disabled={disabledValue}
                                        callBack={setInkStart}/>
            </div>

        </div>
    )
}