// Axios
import axios from 'axios';
// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reduxSoldierMiddleware } from 'redux-soldier';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer
import loginReducer from './login';

// Base URL
export const baseUrl = 'https://petronasnew2.be.assetd.xyz/api/v1/';
    
export const baseAxios = axios.create({ 
    baseURL: baseUrl,
    timeout: 15000,
});

const rootReducer = combineReducers({
    // reducer
    loginReducer,
});

export default function ReduxState(props) {
    let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxSoldierMiddleware)));

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}
