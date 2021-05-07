import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./Store/index";
import { sessionCheck } from "./Actions/_pre";
import 'semantic-ui-css/semantic.min.css'
import './index.css';

const renderApp = preloadedState => {
  const store = configureStore(preloadedState);
  ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
  );
}

(async () => renderApp(await sessionCheck()))();
reportWebVitals();