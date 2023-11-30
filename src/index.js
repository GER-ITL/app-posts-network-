import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

let reranderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store = {store}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

reranderEntireTree(store.getState());
store.subscribe(reranderEntireTree);
