
import { USER_LOGIN } from '../constant'

const initState = [{ id: '001', name: 'zsilent', age: 18 }];

const userLoginReducers = (preState = initState, action) => {
    
    const { type, data } = action;

    switch (type) {
        case USER_LOGIN:
            return [...preState,data];
        default:
            return preState;
    }

}
export default userLoginReducers;