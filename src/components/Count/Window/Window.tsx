import React from "react";
type WindowPropsType = {
    styleWindow: string
    numberCount: number | string
    styleContent: string
}

export const Window: React.FC<WindowPropsType> = ({styleWindow, numberCount, styleContent}) => {

    return (
        <div className={styleWindow}>
                        <span className={styleContent}> {numberCount} </span>
        </div>
    )
}