import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";


const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {userSignin: { userInfo }};

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;