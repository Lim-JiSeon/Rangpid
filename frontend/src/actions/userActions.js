import { Cookie } from "js-cookie";
import Axios from "axios";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from "../constants/userConstants";
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../../actions/userConstants";

const signin = (id) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {id}});
    try {
        const {data} = await Axios.post("api/users/signin", {id})
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
    }
}

const register = (id, age, sex, mbti, addr, height, keyword) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {id, age, sex, mbti, addr, height, keyword}});
    try {
        const {data} = await Axios.post("api/users/register", {id, age, sex, mbti, addr, height, keyword})
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
}

export { signin, register };
