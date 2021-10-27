import React from "react";

type SuperInputNumberPropsType = {
    callBackOnChange: (value: number)=>void
    styleInput: string
    value: number
}




export const SuperInputNumber = ({styleInput, value, callBackOnChange}:SuperInputNumberPropsType)=> {
    const onChangeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
        callBackOnChange(+e.currentTarget.value)
    }
    return <input type={'number'} className={styleInput} onChange={onChangeHandler} value={value}/>
}