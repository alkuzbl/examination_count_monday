import style from "../../Count/Count.module.scss";
import {SuperInputNumber} from "../../SuperInputNumber";
import React from "react";

type FieldNumberPropsType = {
    callBackOnChange: (value: number) => void
    value: number
    styleInput: string
    spanValue: string
}
export const FieldNumber = ({callBackOnChange, value, styleInput, spanValue}: FieldNumberPropsType) => {

    return <div className={style.setCounter__windowsInner}>
        <span className={style.setCounter__windowsSpan}>{spanValue}</span>
        <SuperInputNumber callBackOnChange={callBackOnChange}
                          value={value}
                          styleInput={styleInput}/>

    </div>
}