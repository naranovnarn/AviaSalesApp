
import { createReducer } from "redux-create-reducer";
import * as actionTypes from "../actionTypes";

const initialState = [
  {
    label: "самый дешевый",
    id: 1,
    active: true,
  },
  {
    label: "самый быстрый",
    id: 2,
    active: false,
  },
];


function changeTab(state, id) {
  return state.map( item => {
    if (item.id === id) {
      return {...item, active: true}
    }
    return {...item, active: false}
  })
}


const tabs = createReducer( initialState , {
    [actionTypes.CHANGE_TAB]: (state, { id }) => changeTab(state, id)
});


export default tabs;