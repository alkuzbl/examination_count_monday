import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type AlternativeSuperButtonPropsType = DefaultButtonPropsType & {
    styleBtn?: string
    name?: string
    disabled?: boolean
    callBack: () => void
}

export const AlternativeSuperButton: React.FC<AlternativeSuperButtonPropsType> = ({
                                                                                      styleBtn,
                                                                                      name,
                                                                                      disabled,
                                                                                      callBack
                                                                                  }) => {

    const onClickHandler = () => {
        callBack()
    }
    return <button disabled={disabled}
                   className={styleBtn}
                   onClick={onClickHandler}>{name}</button>
}


