import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import userReducer from "./reducers/user-reducers"
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(<Provider store={store} > <App store={store} aRandomProps="whatever" /></Provider>, document.getElementById('root'));

