import { createStore } from "redux";
import{reducer} from './reducer'
const store = createStore(reducer,
    /* 如果有REDUX扩展，就调用相应的方法*/
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;