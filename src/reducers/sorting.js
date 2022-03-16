import { SET_SORTING, VisibilitySorting } from '../actions/actions';

const initialState = {
  visibilitySorting: VisibilitySorting.SHOW_CHEAPEST,
};

export default function sorting(state = initialState, action) {
  switch (action.type) {
    case SET_SORTING:
      return {
        visibilitySorting: action.sorting,
      };
    default:
      return state;
  }
}
