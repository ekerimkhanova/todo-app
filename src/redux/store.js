import { combineReducers, createStore } from "redux";
import modalReducer from "./modal/modalReducers";
import selectReducer from "./select/selectReducers";
import todosReducer from "./todosList/todosReducers"

const reducers = combineReducers({
    todosList: todosReducer,
    modal: modalReducer,
    select: selectReducer,
});

const persistedState = localStorage.getItem('reduxState') ? 
                            JSON.parse(localStorage.getItem('reduxState'))
                            : 
                            {}

export const rootReducer = (state, action) => {
    return reducers(state, action);
};

const store = createStore(rootReducer, persistedState);

export default store;