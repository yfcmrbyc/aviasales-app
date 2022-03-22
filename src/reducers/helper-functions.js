import { VisibilitySorting } from '../actions/actions';

export const changeFilter = (currentFilter, filters, tickets) => {
  const { all, otherFilters } = filters;

  const hasAllFalse = {
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
  };

  const hasAllTrue = {
    filters: {
      all: true,
      otherFilters: {
        nonStop: true,
        one: true,
        two: true,
        three: true,
      },
    },
    tickets,
  };

  if (currentFilter === 'all') {
    if (all) return hasAllFalse;
    else return hasAllTrue;
  } else {
    const immutableProperties = Object.getOwnPropertyNames(otherFilters).filter((item) => item !== currentFilter);
    const isChecked = immutableProperties.every((item) => otherFilters[item] === true);
    const filterTickets = (value) =>
      tickets.filter(
        (ticket) => ticket.segments[0].stops.length === value || ticket.segments[0].stops.length === value
      );

    if (isChecked && otherFilters[currentFilter]) {
      const tempFilters = {
        all: false,
        otherFilters: {
          ...otherFilters,
          [currentFilter]: false,
        },
      };

      switch (currentFilter) {
        case 'nonStop':
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(2), ...filterTickets(3)],
          };
        case 'one':
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(2), ...filterTickets(3)],
          };
        case 'two':
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1), ...filterTickets(3)],
          };
        case 'three':
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1), ...filterTickets(2)],
          };
      }
    } else if (isChecked && !otherFilters[currentFilter]) {
      return hasAllTrue;
    } else {
      const tempFilters = {
        all,
        otherFilters: {
          ...otherFilters,
          [currentFilter]: !otherFilters[currentFilter],
        },
      };

      const { nonStop, one, two, three } = otherFilters;

      if (currentFilter === 'nonStop' && !otherFilters[currentFilter]) {
        if (!one && !two && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(0),
          };
        } else if (one && !two && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1)],
          };
        } else if (!one && two && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(2)],
          };
        } else if (!one && !two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(3)],
          };
        } else if (one && two && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1), ...filterTickets(2)],
          };
        } else if (one && !two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1), ...filterTickets(3)],
          };
        } else if (!one && two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(2), ...filterTickets(3)],
          };
        }
      } else if (currentFilter === 'nonStop' && otherFilters[currentFilter]) {
        if (!one && !two && !three) {
          return hasAllFalse;
        } else if (one && !two && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(1),
          };
        } else if (!one && two && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(2),
          };
        } else if (!one && !two && three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(3),
          };
        } else if (one && two && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(2)],
          };
        } else if (one && !two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(3)],
          };
        } else if (!one && two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(2), ...filterTickets(3)],
          };
        }
      }

      if (currentFilter === 'one' && !otherFilters[currentFilter]) {
        if (!nonStop && !two && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(1),
          };
        } else if (nonStop && !two && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1)],
          };
        } else if (!nonStop && two && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(2)],
          };
        } else if (!nonStop && !two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(3)],
          };
        } else if (nonStop && two && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1), ...filterTickets(2)],
          };
        } else if (nonStop && !two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1), ...filterTickets(3)],
          };
        } else if (!nonStop && two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(2), ...filterTickets(3)],
          };
        }
      } else if (currentFilter === 'one' && otherFilters[currentFilter]) {
        if (!nonStop && !two && !three) {
          return hasAllFalse;
        } else if (nonStop && !two && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(0),
          };
        } else if (!nonStop && two && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(2),
          };
        } else if (!nonStop && !two && three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(3),
          };
        } else if (nonStop && two && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(2)],
          };
        } else if (nonStop && !two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(3)],
          };
        } else if (!nonStop && two && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(2), ...filterTickets(3)],
          };
        }
      }

      if (currentFilter === 'two' && !otherFilters[currentFilter]) {
        if (!nonStop && !one && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(2),
          };
        } else if (nonStop && !one && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(2)],
          };
        } else if (!nonStop && one && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(2)],
          };
        } else if (!nonStop && !one && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(2), ...filterTickets(3)],
          };
        } else if (nonStop && one && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1), ...filterTickets(2)],
          };
        } else if (nonStop && !one && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(2), ...filterTickets(3)],
          };
        } else if (!nonStop && one && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(2), ...filterTickets(3)],
          };
        }
      } else if (currentFilter === 'two' && otherFilters[currentFilter]) {
        if (!nonStop && !one && !three) {
          return hasAllFalse;
        } else if (nonStop && !one && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(0),
          };
        } else if (!nonStop && one && !three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(1),
          };
        } else if (!nonStop && !one && three) {
          return {
            filters: tempFilters,
            tickets: filterTickets(3),
          };
        } else if (nonStop && one && !three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1)],
          };
        } else if (nonStop && !one && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(3)],
          };
        } else if (!nonStop && one && three) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(3)],
          };
        }
      }

      if (currentFilter === 'three' && !otherFilters[currentFilter]) {
        if (!nonStop && !one && !two) {
          return {
            filters: tempFilters,
            tickets: filterTickets(3),
          };
        } else if (nonStop && !one && !two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(3)],
          };
        } else if (!nonStop && one && !two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(3)],
          };
        } else if (!nonStop && !one && two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(2), ...filterTickets(3)],
          };
        } else if (nonStop && one && !two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1), ...filterTickets(3)],
          };
        } else if (nonStop && !one && two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(2), ...filterTickets(3)],
          };
        } else if (!nonStop && one && two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(2), ...filterTickets(3)],
          };
        }
      } else if (currentFilter === 'three' && otherFilters[currentFilter]) {
        if (!nonStop && !one && !two) {
          return hasAllFalse;
        } else if (nonStop && !one && !two) {
          return {
            filters: tempFilters,
            tickets: filterTickets(0),
          };
        } else if (!nonStop && one && !two) {
          return {
            filters: tempFilters,
            tickets: filterTickets(1),
          };
        } else if (!nonStop && !one && two) {
          return {
            filters: tempFilters,
            tickets: filterTickets(2),
          };
        } else if (nonStop && one && !two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(1)],
          };
        } else if (nonStop && !one && two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(0), ...filterTickets(2)],
          };
        } else if (!nonStop && one && two) {
          return {
            filters: tempFilters,
            tickets: [...filterTickets(1), ...filterTickets(2)],
          };
        }
      }
    }
  }
};

export const changeSorting = (sort, arr) => {
  const arrForSort = [...arr];

  if (sort === VisibilitySorting.SHOW_CHEAPEST) {
    return arrForSort.sort((itemA, itemB) => itemA.price - itemB.price);
  }

  if (sort === VisibilitySorting.SHOW_FASTEST) {
    return arrForSort.sort(
      (itemA, itemB) =>
        itemA.segments[0].duration +
        itemA.segments[1].duration -
        (itemB.segments[0].duration + itemB.segments[1].duration)
    );
  }

  if (sort === VisibilitySorting.SHOW_OPTIMAL) {
    return arrForSort.sort(
      (itemA, itemB) =>
        itemA.segments[0].duration +
        itemA.segments[1].duration +
        itemA.price -
        (itemB.segments[0].duration + itemB.segments[1].duration + itemB.price)
    );
  }

  return arr;
};
