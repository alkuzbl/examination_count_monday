import {combineReducers, createStore} from "redux";
import {reducerCounter} from "./reducer-counter";
import {loadStateStorage, saveStateStorage,} from "./localStorage";


const rootReducer = combineReducers({
    counter: reducerCounter
})

export const store = createStore(rootReducer, loadStateStorage())

store.subscribe(() => {
    saveStateStorage({
        counter: store.getState().counter
    });
});
export type RootStateType = ReturnType<typeof rootReducer>


