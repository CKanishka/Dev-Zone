import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const initStore = (initialState = {}) => {
    console.log('Intialzing store')
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
  };
