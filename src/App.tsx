import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from "./components/Count/Count";
import {SetCount} from "./components/SetCount/SetCount";






/*
function App() {
    const [maxValue, setMaxValue] = useState<number>( Number(localStorage.getItem("maxValue")) | 0 )
    const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem("startValue")) | 0)
    const [numberCount, setNumberCount] = useState<number>(Number(localStorage.getItem("count")) | 0)
    const [disabledButton, setDisabledButton] = useState<boolean>(!Boolean(localStorage.getItem("disabled")))
    const [errorWin, setErrorWin] = useState<string>('')

    useEffect(()=>{localStorage.setItem("maxValue", JSON.stringify(maxValue))}, [maxValue])
    useEffect(()=>{localStorage.setItem("startValue", JSON.stringify(startValue))}, [startValue])
    useEffect(()=>{localStorage.setItem("count", JSON.stringify(startValue))}, [startValue])
    useEffect(()=>{localStorage.setItem("count", JSON.stringify(numberCount))}, [numberCount])
    useEffect(()=>{localStorage.setItem("disabled", JSON.stringify(disabledButton))}, [disabledButton])

/// Setting countering
    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setDisabledButton(true)
    }
    const changeStartValue = (value: number) => {
        setStartValue(value)
        setDisabledButton(true)
    }
    const setInkStart = () => {
        setDisabledButton(false)
        setNumberCount(startValue)

    }
/// Counter
    const onInk = () => {
        setNumberCount(numberCount + 1)
    }
    const onReset = () => {
        setNumberCount(startValue)
    }

    useEffect(()=>{
        if (maxValue < 0 || startValue < 0) setErrorWin('Values incorrect!!! The value cannot be less than "0"')
        else if (maxValue === startValue) setErrorWin('Values incorrect!!! The values cannot be equal')
        else if (startValue > maxValue) setErrorWin('Values incorrect!!! The initial value cannot be greater than the final value')
        else setErrorWin('Enter the values and press "Set"')
    },[maxValue,startValue])

    return (
        <div className="App">
            <header className="App-header">
                <SetCount startValue={startValue}
                          maxValue={maxValue}
                          setInkStart={setInkStart}
                          changeMaxValue={changeMaxValue}
                          changeStartValue={changeStartValue}
                          disabledBtn={disabledButton}
                />
                <Count disabledBtn={disabledButton}
                       numberCount={numberCount}
                       onInk={onInk}
                       onReset={onReset}
                       errorWindowContent={errorWin}
                       maxValue={maxValue}
                       startValue={startValue}
                />
            </header>
        </div>
    );
}

export default App;
*/

function App() {
    const [maxValue, setMaxValue] = useState<number>( Number(localStorage.getItem("maxValue")) | 0 )
    const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem("startValue")) | 0)
    const [numberCount, setNumberCount] = useState<number>(Number(localStorage.getItem("count")) | 0)
    const [disabledButton, setDisabledButton] = useState<boolean>(Boolean(!localStorage.getItem("disabled")))
    const [errorWin, setErrorWin] = useState<string>('')

    useEffect(()=>{localStorage.setItem("maxValue", JSON.stringify(maxValue))}, [maxValue])
    useEffect(()=>{localStorage.setItem("startValue", JSON.stringify(startValue))}, [startValue])
    useEffect(()=>{localStorage.setItem("count", JSON.stringify(startValue))}, [startValue])
    useEffect(()=>{localStorage.setItem("count", JSON.stringify(numberCount))}, [numberCount])
    useEffect(()=>{localStorage.setItem("disabled", JSON.stringify(disabledButton))}, [disabledButton])

/// Setting countering
    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setDisabledButton(true)
    }
    const changeStartValue = (value: number) => {
        setStartValue(value)
        setDisabledButton(true)
    }
    const setInkStart = () => {
        setDisabledButton(false)
        setNumberCount(startValue)
    }
/// Counter
    const onInk = () => {
        setNumberCount(numberCount + 1)
    }
    const onReset = () => {
        setNumberCount(startValue)
    }

    useEffect(()=>{
        if (maxValue < 0 || startValue < 0) setErrorWin('Values incorrect!!! The value cannot be less than "0"')
        else if (maxValue === startValue) setErrorWin('Values incorrect!!! The values cannot be equal')
        else if (startValue > maxValue) setErrorWin('Values incorrect!!! The initial value cannot be greater than the final value')
        else setErrorWin('Enter the values and press "Set"')
    },[maxValue,startValue])

    return (
        <div className="App">
            <header className="App-header">
                <SetCount startValue={startValue}
                          maxValue={maxValue}
                          setInkStart={setInkStart}
                          changeMaxValue={changeMaxValue}
                          changeStartValue={changeStartValue}
                          disabledBtn={disabledButton}
                />
                <Count disabledBtn={disabledButton}
                       numberCount={numberCount}
                       onInk={onInk}
                       onReset={onReset}
                       errorWindowContent={errorWin}
                       maxValue={maxValue}
                       startValue={startValue}
                />
            </header>
        </div>
    );
}

export default App;




