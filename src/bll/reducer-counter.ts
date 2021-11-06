export type InitialStateType = typeof initialState

const initialState = {
    maxValue: 0,
    startValue: 0,
    numberCount: 0,
    disabledButton: true,
    error: 'Enter the values and press "Set"'
}
export const reducerCounter = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE_MAX_VALUE":
            return {...state, maxValue: action.value, disabledButton: true}
        case "CHANGE_START_VALUE":
            return {...state, startValue: action.value, disabledButton: true}
        case "SET_INK_START":
            return {...state, disabledButton: false, numberCount: state.startValue}
        case "ON_INK":
            return {...state, numberCount: state.numberCount + 1}
        case "RESET_COUNTER":
            return {...state, numberCount: state.startValue}
        case "SET_ERROR":
            return {...state, error: action.errorValue}
        default:
            return state
    }


}
type ActionType = ChangeMaxValueType | ChangeStartValueType | SetInkStartType | OnInkType | ResetCounterType | SetErrorType
type ChangeMaxValueType = ReturnType<typeof changeMaxValueAC>

type ChangeStartValueType = ReturnType<typeof changeStartValueAC>

type SetInkStartType = ReturnType<typeof setInkStartAC>

type OnInkType = ReturnType<typeof onInkAC>

type ResetCounterType = ReturnType<typeof resetCounterAC>

type SetErrorType = ReturnType<typeof setErrorAC>

export const changeMaxValueAC = (value: number)=>({type: 'CHANGE_MAX_VALUE', value} as const)

export const changeStartValueAC = (value: number)=>({type: 'CHANGE_START_VALUE', value} as const)

export const setInkStartAC = ()=>({type: 'SET_INK_START'} as const)

export const onInkAC = ()=>({type: 'ON_INK'} as const)

export const resetCounterAC = ()=>({type: 'RESET_COUNTER'} as const)

export const setErrorAC = (errorValue: string)=>({type: 'SET_ERROR', errorValue} as const)

