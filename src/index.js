import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from './Styles/globalStyles';
// importando Provider e a store
import { Provider } from "react-redux";
import store from "./store";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle /> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();