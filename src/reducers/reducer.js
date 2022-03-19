import { VisibilitySorting } from '../actions/actions';
import { changeSorting, changeFilter } from './helper-functions';

const initialState = {
  sorting: VisibilitySorting.SHOW_ANY,
  isError: false,
  errorMessage: '',
  searchID: '',
  tickets: [],
  filteredTickets: {
    filters: {
      all: false,
      otherFilters: {
        nonStop: false,
        one: false,
        two: false,
        three: false,
      },
    },
    tickets: [],
  },
  isStoped: false,
  isAdded: false,
  end: 5,
};

export default function reducer(state = initialState, action) {
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
        tickets: [...state.tickets, ...action.tickets],
        isStoped: action.stop,
      };
    case 'CHOOSE_FILTER':
      return {
        ...state,
        sorting: VisibilitySorting.SHOW_ANY,
        isAdded: false,
        end: 5,
        filteredTickets: changeFilter(action.filter, state.filteredTickets.filters, [...state.tickets]),
      };
    case 'SET_SORTING':
      return {
        ...state,
        sorting: action.sorting,
        filteredTickets: {
          ...state.filteredTickets,
          tickets: changeSorting(action.sorting, [...state.filteredTickets.tickets]),
        },
      };
    case 'LOAD_MORE_TICKETS':
      return {
        ...state,
        isAdded: true,
        end: state.end + 5,
      };
    default:
      return state;
  }
}
