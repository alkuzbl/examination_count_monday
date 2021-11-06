import {changeMaxValueAC, changeStartValueAC, reducerCounter, resetCounterAC, setInkStartAC} from "./reducer-counter";

test('The maxValue and disabledButton values should change', () => {
    const state = {
        maxValue: 3,
        startValue: 0,
        numberCount: 0,
        disabledButton: false,
        error: ''
    }
    const testState = reducerCounter(state, changeMaxValueAC(4))

    expect(testState.maxValue).toBe(4)
    expect(testState.disabledButton).toBe(true)
})

test('The startValue and disabledButton values should change', () => {
    const state = {
        maxValue: 0,
        startValue: 3,
        numberCount: 0,
        disabledButton: false,
        error: ''
    }
    const testState = reducerCounter(state, changeStartValueAC(4))

    expect(testState.startValue).toBe(4)
    expect(state.startValue).toBe(3)
    expect(testState.disabledButton).toBe(true)
})

test('The startValue and numberCount values should be equal', () => {
    const state = {
        maxValue: 0,
        startValue: 3,
        numberCount: 0,
        disabledButton: true,
        error: ''
    }
    const testState = reducerCounter(state, setInkStartAC())

    expect(testState.startValue).toBe(3)
    expect(testState.numberCount).toBe(3)
    expect(state.numberCount).toBe(0)
    expect(testState.disabledButton).toBe(false)
})

test('When the counter is reset, the startValue is equal to the numberCount', () => {
    const state = {
        maxValue: 0,
        startValue: 3,
        numberCount: 10,
        disabledButton: true,
        error: ''
    }
    const testState = reducerCounter(state, resetCounterAC())

    expect(state.numberCount).toBe(10)
    expect(testState.numberCount).toBe(3)
    expect(testState.startValue).toBe(3)
})