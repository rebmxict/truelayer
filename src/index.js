import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App
    history={createBrowserHistory()}
  />,
  document.getElementById('root')
);

serviceWorker.unregister();