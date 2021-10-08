import React from "react";

type WindowPropsType = {
    styleWindow: string
    numberCount: number
}

export const Window: React.FC<WindowPropsType> = ({styleWindow, numberCount}) => {

    return (
        <div className={styleWindow}>
            {numberCount}
        </div>
    )
}