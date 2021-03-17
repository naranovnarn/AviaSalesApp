import { combineReducers } from 'redux'
import searchId from "./searchIdReducer";
import tickets from "./tikectsReducer";
import loading from "./loadingReducer";
import filters from "./filterReducer";
import tabs from "./tabReducer";


export const rootReducer = combineReducers({
  searchId,
  tickets,
  loading,
  filters,
  tabs
});

export default rootReducer;