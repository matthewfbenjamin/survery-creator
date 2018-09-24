import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./store"
import Full from './Full'

ReactDOM.render(<Provider store={store}>
    <Full>
      <App />
  </Full>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
