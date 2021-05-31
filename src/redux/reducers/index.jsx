/**
 * 汇总reducers
 */
import {combineReducers} from 'redux';//引入createStore，专门用于创建store对象 applyMiddleware执行中间件 combineReducers合并
 /** 这里可以持续丢数据进来 */
import userLoginReducers from "./userlogin"

 /**
 * 合并Reducer
 */
export default combineReducers({userArray:userLoginReducers})