import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import thunk from "redux-thunk"
import { createStore,compose,applyMiddleware } from "redux";
import  {reducers} from "./redux/reducers/index";
const store=createStore(reducers,compose(applyMiddleware(thunk)))
// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
