import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';

const RootComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
/*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);*/
//serviceWorker.unregister();