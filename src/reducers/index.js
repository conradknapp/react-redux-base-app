import { combineReducers } from "redux";
import cards_reducer from "./cards_reducer";

const rootReducer = combineReducers({
  cds: cards_reducer
});

export default rootReducer;
