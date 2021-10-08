import React, {useState} from "react";
import {AlternativeSuperButton} from "./c2-SuperButton/AlternativeSuperButton";
import style from './Count.module.scss'


export const Count = () => {
    //стейт для окна счетчика
    let [numberCount, setNumberCount] = useState<number>(0)
    //стейт для блокировки кнопок и стилизации
    let [error, setError] = useState(false)
    //добавляем +1 при нажатии на клавишу
    const onInk = () => {
        setNumberCount(numberCount + 1)
        //блокируем/разблокируем кнопку при достижении нужного числа
        if (numberCount === 4) {
            setError(true)
        }
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