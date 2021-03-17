import { createReducer } from "redux-create-reducer";
import * as actionTypes from "../actionTypes";


 const loading = createReducer( null , {
    [actionTypes.START_LOADING]: () => false ,
    [actionTypes.FINISH_LOADING]: () => true 
});


export default loading;