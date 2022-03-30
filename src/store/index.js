import { createStore } from "redux";
import reducer from './reducer'
/**
 * redux库的核心API：
 * createStore
 * 作用是创建一个store对象,并且将我们自己写的reducer注册到store中
 * store.getState()
 * 获取当前store中正在被托管的状态
 * store.dispatch(action)
 * 把组件产生的action提交到store中的reducer函数，使其产生一个新的状态
 * store.subscribe(callback)
 * 当store中托管的组件状态发生了改变，就执行callback函数
 */
 const store = createStore(reducer,
      /* 如果有REDUX扩展，就调用相应的方法*/
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
