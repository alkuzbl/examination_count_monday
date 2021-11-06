import {RootStateType} from "./store";

export const loadStateStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState) return JSON.parse(serializedState);

    } catch (err) {
        alert('Storage Access error')
        return undefined;
    }
};


export const saveStateStorage = (state: RootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        alert('Storage Access error')
    }
};