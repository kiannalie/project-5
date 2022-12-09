import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

import PhotoReturn from "../src/components/photoReturn";
// import Photos from '../src/components/photos'

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.css";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/photos">Show Photos</Link>
          </div>
          <Route exact path="/" component={App} />
          <Route path="/photos" component={PhotoReturn} />
        </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
