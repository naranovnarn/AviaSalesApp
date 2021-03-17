import { createReducer } from "redux-create-reducer";
import * as actionTypes from "../actionTypes";

const initialState = [
  {
    title: 'ALL',
    text: 'Все',
    enabled: false
  },
  {
    title: 'ZERO',
    text: 'Без пересадок',
    enabled: false
  },
  {
    title: 'ONE',
    text: '1 пересадка',
    enabled: false
  },
  {
    title: 'TWO',
    text: '2 пересадки',
    enabled: true
  },
  {
    title: 'THREE',
    text: '3 пересадки',
    enabled: false
  },
];

function changeFilter(state, title) {

  if (title === 'ALL') {
    const filter = state.find(item => item.title === title);

    if (!filter.enabled) {
      return state.map( item => ({...item, enabled: true}));
    } 
    return state.map( item => ({...item, enabled: false}));
  }

  const newState = state.map( item => {
    if (item.title === title) {
      return {...item, enabled: !item.enabled}
    }
    return {...item}
  })

  const counEnabled = newState.reduce((acc, next) => {

    if (next.enabled)  return acc + 1;
    return acc;

  }, 0)

  if (counEnabled === 4 && newState[0].enabled === false) {
    return state.map( item => ({...item, enabled: true}));
  }

  if (title !== 'ALL' && newState[0].enabled === true) {
    return newState.map(item => {
      if (item.title === 'ALL') {
        return {...item, enabled: false}
      }
      return {...item}
    })
  }

  return newState;
}


const filters = createReducer( initialState , {
    [actionTypes.CHANGE_FILTER]: (state, { title }) => changeFilter(state, title)
});


export default filters;