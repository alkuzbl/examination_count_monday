import React from "react";
import {AlternativeSuperButton} from "../SuperButton/AlternativeSuperButton";
import style from '../Count/Count.module.scss'
import {SuperInputNumber} from "../SuperInputNumber";
import {FieldNumber} from "./FieldNumber/FieldNumber";


type CountPropsType = {
    maxValue: number
    startValue: number
    disabledBtn: boolean
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    setInkStart: () => void
}

export const SetCount = ({
                             maxValue,
                             changeMaxValue,
                             startValue,
                             changeStartValue,
                             setInkStart,
                             disabledBtn
                         }: CountPropsType) => {


// Error styles
    const disabledValue = startValue === maxValue || startValue > maxValue || maxValue < 0 || startValue < 0 ? disabledBtn : !disabledBtn
    const styleInputMax =( maxValue < 0 || maxValue <= startValue) ? style.errorInput : style.setCounter__windowsInput
    const styleInputStart = startValue < 0 || maxValue <= startValue ? style.errorInput : style.setCounter__windowsInput

    return (
        <div className={style.counter}>
            <div className={style.counter__window}>
                <FieldNumber callBackOnChange={changeMaxValue}
                             value={maxValue}
                             styleInput={styleInputMax}
                             spanValue={'Max value'}/>
                <FieldNumber callBackOnChange={changeStartValue}
                             value={startValue}
                             styleInput={styleInputStart}
                             spanValue={'Start value'}/>
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

