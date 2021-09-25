import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import peopleReducer from "./reducers/peopleReducer";
import housesReducer from "./reducers/housesReducer";

const reducers = combineReducers({
  houses: housesReducer,
  people: peopleReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
