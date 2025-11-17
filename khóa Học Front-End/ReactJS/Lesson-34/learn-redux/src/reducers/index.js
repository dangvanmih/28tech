import {combineReducers} from "redux";
import counterReducer from "./counter";
import todosReducer from "./todosReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    todos: todosReducer
    //thêm nhiều reducer vào đây
})

export default allReducers;