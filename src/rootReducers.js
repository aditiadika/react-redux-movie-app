import { combineReducers } from "redux";

import toggle from "./toggle/reducers";
import movies from "./movies/reducers";

const rootReducer = combineReducers({
  toggle,
  movies
});

export default rootReducer;
