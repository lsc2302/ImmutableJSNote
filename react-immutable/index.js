import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import {Map} from 'immutable';
import {Provider} from 'react-redux'

const cartReducer = (state=Map({}),action)=>{
    switch(action.type){
        case "SAVE_TO_CART":
            return state.set(action.payload.goods_name, action.payload.count);
        default:
            return state;
    }
}

const reducers = combineReducers({
    cart:cartReducer
})

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);