import { createReducer } from "redux-create-reducer";
import * as actionTypes from "../actionTypes";


 const tickets = createReducer( [] , {
    [actionTypes.GET_TICKETS]: (state, { tickets }) => [...state, ...tickets]
});


export default tickets;