import React, {useState} from 'react';
import './App.css';
import {Count} from "./components/Count";
import style from "./components/Count.module.scss";

function App() {
    //стейт для окна счетчика
    let [numberCount, setNumberCount] = useState<number>(0)
    //стейт для блокировки кнопок и стилизации
    let [error, setError] = useState<boolean>(false)
    //добавляем +1 при нажатии на клавишу
    const onInk = () => {
        setNumberCount(numberCount + 1)
        //блокируем/разблокируем кнопку при достижении нужного числа
        if (numberCount === 4) setError(true)
    }
    //сброс счетчика и установка начальных значений
    const onReset = () => {
        setNumberCount(0)
        setError(false)
    }
    // стили кнопок и окна счетчика
    let styleReset = !error ? style.counter__btnReset : style.error
    let styleWindow = !error ? style.counter__window : style.errorWin

    return (
        <div className="App">
            <header className="App-header">
                <Count numberCount={numberCount}
                       onInk={onInk}
                       onReset={onReset}
                       styleWindow={styleWindow}
                       error={error}
                       styleReset={styleReset}
                />
            </header>
        </div>
    );
}

export default App;