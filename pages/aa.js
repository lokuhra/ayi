import React from 'react';
import '../src/components/Viejo/index.css';
import App from '../src/components/Viejo/App';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../src/components/Viejo/reducers/rootReducer';

let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

const Viejo = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Viejo;
