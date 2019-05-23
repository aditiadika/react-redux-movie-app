import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import logo from "./logo.svg";
import "./App.css";

import rootReducer from "./rootReducers";

import MovieList from "./movies/MovieList";
import MovieDetail from "./movies/MovieDetail";
import Toggle from "./toggle/Toggle";

const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        {/* <Toggle /> */}
        <Switch>
          <Route exact={true} path="/" component={MovieList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
