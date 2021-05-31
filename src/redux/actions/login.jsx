import {USER_LOGIN} from "../../redux/constant"

/**
 * 创建一个人
 * @param {*} personObj 
 * @returns 
 */
export const createAddPersonAaction = (personObj)=>({type:USER_LOGIN,data:personObj})