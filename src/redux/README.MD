This template contains the basic configuration to use redux, redux-saga and redux-persist inside the application.

REDUX: https://redux.js.org/api/api-reference

REDUX-SAGA: https://redux-saga.js.org/docs/api/

REDUX-PERSIST: https://github.com/rt2zz/redux-persist

## STORE
This folder includes the main configuration of the store and the middlewares (redux-saga) that are going to be used, besides it contains the persist store configuration. Validating also the development environment to offer tools.

~~~javascript
//To persist information on local storage, the following configuration must be created

import {persistStore} from "redux-persist";

const persist = persistStore(store);

export {store, persist};
~~~

## ACTIONTYPES
This folder should contain the file (or files) where are going to be defined the constants used on sagas, actions and reducers.

## ACTIONS
This folder includes the actions ("Actions are payloads of information that send data from your application to your store. They are the only source of information for the store") that are going to be dispatched.

*To see examples go to redux/actions/item*

## REDUCERS
This folder includes the reducers ("Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe *what happened*, but don't describe how the application's state changes")

*To see examples go to redux/reducers/itemReducer*

~~~javascript
//To persist information on local storage it is necessary to create the following keys: 
// key: localStorage key
// storage: localStorage
// whitelist: receives an array with reducers that are going to be persisted

import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";

const persist = {
    key: 'app-root',
    storage,
    whitelist: []
};

export default persistReducer(persist,rootReducer);
~~~

## SAGA
This folder includes the sagas which provide some helper effects wrapping internal functions to spawn tasks when some specific actions are dispatched to the Store.

*To see examples go to redux/saga/itemSaga*