import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';



let root = combineReducers({

})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);