In these templates are implemented different tools that could be necessary in a React project:

COOKIE 


STORAGE
It contains the implementation of the main methods to handle local storage, like load, save, remove, clear, and persist.

* loadStorage: receives a key and returns data or undefined when the key is not in the local storage (by default it has a key called 'root-storage')

* saveStorage: receives the state and a default key, save in local storage the data received.
* removeStorage: receives a key and remove it from local storage.
* clearStorage: it does not receive parameters, what it does is clear the local storage.
* persistStorage: receives the store, the whitelist (mentioned on redux folder) and a key (by default 'persist-store').

~~~javascript
//The following code correspond to the store configuration

const composeEnhancers = (process.env.NODE_ENV === `development`)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];
const initialState = loadStorage(key)

const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleWare.run(rootSaga);
store.subscribe(() => persistStorage(store, [], key))

export store;

~~~

VALIDATOR
It handles the responses on an API call, so it is possible to make custom validations and use them in the services classes. 