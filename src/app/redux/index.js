import { createStore, applyMiddleware, compose } from 'redux';
import * as reduxModule from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import setAxios from './constants/axiosConfig';
import reducers from './reducers';
import { actionToken } from './authorization/constants/actionConstants';

reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';

setAxios();
const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const configureStore = () => {
  const store = createStore(
    reducers,
    enhancer,
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configureStore();

store.subscribe(() => console.log(store.getState()));
if (localStorage.authToken) store.dispatch(actionToken(localStorage.authToken));


export default store;
