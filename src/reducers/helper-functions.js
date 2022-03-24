import { VisibilitySorting } from '../actions/actions';

export const changeFilter = (currentFilter, filters, tickets, filteredTickets) => {
    const { all, otherFilters } = filters;
  
    const hasAllFalse = {
      filters: {
        all: false,
        otherFilters: {
          nonStop: { value: 0, checked: false },
          one: { value: 1, checked: false },
          two: { value: 2, checked: false },
          three: { value: 3, checked: false },
        },
      },
      tickets: [],
    };
  
    const hasAllTrue = {
      filters: {
        all: true,
        otherFilters: {
          nonStop: { value: 0, checked: true },
          one: { value: 1, checked: true },
          two: { value: 2, checked: true },
          three: { value: 3, checked: true },
        },
      },
      tickets,
    };
  
    if (currentFilter === 'all') {
      if (all) return hasAllFalse;
      else return hasAllTrue;
    } else {
      const isChecked = Object.getOwnPropertyNames(otherFilters)
                              .filter((item) => item !== currentFilter)
                              .every((item) => otherFilters[item].selected === true);
      const filterTickets = (filter) => {
        if (otherFilters[filter].checked) {
          return [
            ...filteredTickets,
            tickets.filter(ticket => 
                           ticket.segments[0].stops.length === otherFilters[filter].value || ticket.segments[0].stops.length === otherFilters[filter].value)
          ]
        } else {
          return [
            filteredTickets.filter(ticket => 
                           ticket.segments[0].stops.length !== otherFilters[filter].value || ticket.segments[0].stops.length !== otherFilters[filter].value)
          ]
        }
      };
  
  
      if (isChecked && otherFilters[currentFilter].checked) {
        return {
          filters: {
            all: false,
            otherFilters: {
              ...otherFilters,
              [currentFilter]: {
                value: otherFilters[currentFilter].value,
                checked: false 
              }
           }
        },
            tickets: filterTickets(currentFilter)      
        }
      } else if (isChecked && !otherFilters[currentFilter].checked) {
        return hasAllTrue;
      } else {
        return {
          filters: {  
            all,
            otherFilters: {
              ...otherFilters,
              [currentFilter]: {
                  value: otherFilters[currentFilter].value,
                  checked: !otherFilters[currentFilter].checked 
                }
            }
          },
          tickets: filterTickets(currentFilter) 
        }
      }
    };
}

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
