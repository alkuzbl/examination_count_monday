import React, {useState} from 'react';
import './App.css';
import {Count} from "./components/Count";
import {start} from "repl";

function App() {
    const maxValue = 5
    const startValue = 0
    //стейт для окна счетчика
    const [numberCount, setNumberCount] = useState<number>(startValue)
    const onInk = () => {
        setNumberCount(numberCount + 1)
    }
    //сброс счетчика и установка начальных значений
    const onReset = () => {
        setNumberCount(startValue)
    }


    return (
        <div className="App">
            <header className="App-header">
                <Count numberCount={numberCount}
                       onInk={onInk}
                       onReset={onReset}
                       maxValue={maxValue}
                       startValue={startValue}

                />
            </header>
        </div>
    );
}

export default App;