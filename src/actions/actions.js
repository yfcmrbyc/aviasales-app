export const CHOOSE_ALL = 'CHOOSE_ALL';
export const CHOOSE_FILTER = 'CHOOSE_FILTER';
export const SET_SORTING = 'SET_SORTING';

export const VisibilitySorting = {
  SHOW_CHEAPEST: 'SHOW_CHEAPEST',
  SHOW_FASTEST: 'SHOW_FASTEST',
  SHOW_OPTIMAL: 'SHOW_OPTIMAL',
};

export function chooseAll() {
  return { type: CHOOSE_ALL };
}

export function chooseFilter(filter) {
  return {
    type: CHOOSE_FILTER,
    filter,
  };
}

export function setSorting(sorting) {
  return {
    type: SET_SORTING,
    sorting,
  };
}

export function setError(error) {
  return {
    type: 'SET_ERROR',
    message: error.message,
  };
}

export function setSearchID(searchID) {
  return {
    type: 'SET_SEARCH_ID',
    searchID,
  };
}

export function setTickets(tickets, stop) {
  return {
    type: 'SET_TICKETS',
    tickets,
    stop,
  };
}

export function stopLoading() {
  return {
    type: 'STOP_LOADING',
  };
}

export function getTickets(searchID) {
  const request = fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID}`);

  return (dispatch) => {
    request
      .then((response) => response.json())
      .then((result) => {
        dispatch(setTickets(result.tickets, result.stop));
        dispatch(stopLoading());
      })
      .catch((err) => dispatch(setError(err)));
  };
}

export function getSearchID() {
  const request = fetch('https://front-test.beta.aviasales.ru/search');
  return (dispatch) => {
    request
      .then((response) => response.json())
      .then((result) => {
        dispatch(setSearchID(result.searchId));
        dispatch(getTickets(result.searchId));
      })
      .catch((err) => dispatch(setError(err)));
  };
}
