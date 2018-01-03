import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//import App from './component/app';
import App from './component/App';
import reducer from './reducers/'
const  store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);
ReactDom.render(
  <Provider store={store}>
    <App
    history={history}
    location={location}
    />
  </Provider>,
  document.querySelector('.container')
);
