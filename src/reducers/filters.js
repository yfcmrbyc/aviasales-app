import { CHOOSE_ALL, CHOOSE_FILTER } from '../actions/actions';

const initialState = {
  all: false,
  otherFilters: {
    nonStop: false,
    one: false,
    two: false,
    three: false,
  },
};

const changeFilter = (state, filter) => {
  const { all, otherFilters } = state;
  const immutableProperties = Object.getOwnPropertyNames(otherFilters).filter((item) => item !== filter);
  const isChecked = immutableProperties.every((item) => otherFilters[item] === true);

  if (isChecked && otherFilters[filter]) {
    return {
      all: false,
      otherFilters: {
        ...otherFilters,
        [filter]: false,
      },
    };
  } else if (isChecked && !otherFilters[filter]) {
    return {
      all: true,
      otherFilters: {
        ...otherFilters,
        [filter]: true,
      },
    };
  } else {
    return {
      all,
      otherFilters: {
        ...otherFilters,
        [filter]: !otherFilters[filter],
      },
    };
  }
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_ALL:
      return {
        all: !state.all,
        otherFilters: {
          nonStop: !state.all,
          one: !state.all,
          two: !state.all,
          three: !state.all,
        },
      };
    case CHOOSE_FILTER:
      return changeFilter(state, action.filter);
    default:
      return state;
  }
}
