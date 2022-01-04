import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
  ));

export default store;

// for adding extension for google chrome extension redux dev tools
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

// ===================== OR =============================

// npm install --save redux-devtools-extension
