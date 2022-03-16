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
