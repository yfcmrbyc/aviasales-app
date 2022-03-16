const initialState = {
  isError: false,
  errorMessage: '',
  isLoaded: false,
  searchID: '',
  tickets: [],
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'STOP_LOADING':
      return {
        ...state,
        isLoaded: true,
      };
    case 'SET_SEARCH_ID':
      return {
        ...state,
        searchID: action.searchID,
      };
    case 'SET_ERROR':
      return {
        ...state,
        isError: true,
        errorMessage: action.message,
        isLoaded: true,
      };
    case 'SET_TICKETS':
      return {
        ...state,
        tickets: action.tickets,
        isStoped: action.stop,
      };
    default:
      return state;
  }
}
