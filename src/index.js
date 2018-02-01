import React from "react";
import { render } from "react-dom";
// bring in createStore from 'redux' && Provider from 'react-redux'
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// bring in rootReducer
import rootReducer from "./reducers/index";

// pass in rootReducer to createStore -> redux store
const store = createStore(rootReducer);

// provider allows us to inject our store into React components by passing in the store as props
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
