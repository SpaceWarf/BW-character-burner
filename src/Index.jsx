import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store.js';
import App from '#Components/App/App.jsx';
import './Index.scss';

window.onbeforeunload = () => {
  if (window.location.pathname === '/editor') {
    return "";
  }
};

const Index = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
