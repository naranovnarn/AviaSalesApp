import * as actionTypes from '../actionTypes';
import uniqid from 'uniqid';

export const getData = () => async(dispatch, getState, api) => {

  dispatch(startLoading());

  const { searchId } = await api.getSearchId();

  dispatch(getSearchId(searchId));

  while(true) {

    let { tickets, stop } = await api.getTickets(searchId);

    tickets = tickets.map( ticket => ({...ticket, id: uniqid('ticket-')}));

    dispatch(getTickets(tickets));

    if (stop) {
      dispatch(finishLoading());
      break;
    }
  }

}

export const getSearchId = (searchId) => ({

  type: actionTypes.GET_SEARCH_ID,
  searchId

});

export const getTickets = (tickets) => ({

  type: actionTypes.GET_TICKETS,
  tickets

});

export const startLoading = () => ({
  type: actionTypes.START_LOADING
});

export const finishLoading = () => ({
  type: actionTypes.FINISH_LOADING
});

export const changeFilter = (title) => ({
  type: actionTypes.CHANGE_FILTER,
  title
})

export const changeTab = (id) => ({
  type: actionTypes.CHANGE_TAB,
  id
})