import React from 'react';
import './App.css';

import {SetCount} from "./components/SetCount/SetCount";
import {RootStateType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {
    changeMaxValueAC, changeStartValueAC, InitialStateType, onInkAC, resetCounterAC, setErrorAC, setInkStartAC
} from "./bll/reducer-counter";
import Count from "./components/Count/Count";

function App() {
    const {maxValue, startValue, disabledButton, error , numberCount} = useSelector<RootStateType, InitialStateType>(state => state.counter)

    const dispatch = useDispatch()

    const errorHandler = (maxValue: number, startValue: number)=>{
        if (maxValue < 0 || startValue < 0) setError('Values incorrect!!! The value cannot be less than "0"')
        else if (maxValue === startValue) setError('Values incorrect!!! The values cannot be equal')
        else if (startValue > maxValue) setError('Values incorrect!!! The initial value cannot be greater than the final value')
        else setError('Enter the values and press "Set"')
    }

    const changeMaxValue = (value: number) => {
        dispatch(changeMaxValueAC(value))
        errorHandler(value, startValue)
    }

    const changeStartValue = (value: number) => {
        dispatch(changeStartValueAC(value))
        errorHandler(maxValue,value)
    }

    const setInkStart = () => dispatch(setInkStartAC())

    const onReset = () => dispatch(resetCounterAC())

    const onInk = () => dispatch(onInkAC())

    const setError = (errorValue: string) => dispatch(setErrorAC(errorValue))



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
                       errorValue={error}
                       maxValue={maxValue}
                       startValue={startValue}
                />
            </header>
        </div>
    );
}

export default App;
