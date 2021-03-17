import { createReducer } from "redux-create-reducer";
import * as actionTypes from "../actionTypes";


 const searchId = createReducer( '', {
    [actionTypes.GET_SEARCH_ID]: (state, { searchId }) => searchId 
});


export default searchId;