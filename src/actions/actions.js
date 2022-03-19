export const VisibilitySorting = {
  SHOW_ANY: 'SHOW_ANY',
  SHOW_CHEAPEST: 'SHOW_CHEAPEST',
  SHOW_FASTEST: 'SHOW_FASTEST',
  SHOW_OPTIMAL: 'SHOW_OPTIMAL',
};

export function chooseFilter(filter) {
  return {
    type: 'CHOOSE_FILTER',
    filter,
  };
}

export function setSorting(sorting) {
  return {
    type: 'SET_SORTING',
    sorting,
  };
}

export function setError() {
  return {
    type: 'SET_ERROR',
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
      .catch((err) => {
        if (err.name === 'SyntaxError') {
          console.warn(err);
        } else {
          dispatch(setError());
          console.error(err);
        }
      });
  };
}

export function getSearchID() {
  const request = fetch('https://front-test.beta.aviasales.ru/search');
  return (dispatch) => {
    request
      .then((response) => response.json())
      .then((result) => {
        dispatch(setSearchID(result.searchId));
      })
      .catch((err) => {
        dispatch(setError());
        console.error(err);
      });
  };
}

export function loadMoreTickets() {
  return {
    type: 'LOAD_MORE_TICKETS',
  };
}
