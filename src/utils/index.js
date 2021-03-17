function filteredByCountTransfers(tickets, count) {
  return tickets.filter((item => {
    const { stops } = item.segments[0];
    const countTransfers = stops.length;
    return countTransfers === count;
  }));
}

function sortPrice(tickets) {

  const newTickets = [...tickets];
  return newTickets.sort((a, b) => a.price > b.price ? 1 : -1);

}

function sortDuration(tickets) {

  const newTickets = [...tickets];
  return newTickets.sort((a, b) => a.segments[0].duration > b.segments[0].duration ? 1 : -1);

}

export const filterTickets = (tickets, filters) => {

  let currentFilter;

  for (let { enabled, title } of filters) {
    if (enabled) {
      currentFilter = title
    }
  }

  switch (currentFilter) {
    case 'ZERO': {
      return filteredByCountTransfers(tickets, 0)
    }
    case 'ONE': {
      return filteredByCountTransfers(tickets, 1)
    }
    case 'TWO': {
      return filteredByCountTransfers(tickets, 2)
    }
    case 'THREE': {
      return filteredByCountTransfers(tickets, 3)
    }
    case 'ALL': {
      return tickets;
    }

    default: return tickets;
  }
}

export const tabFilterTickets = (tickets, tabs) => {

  const currentTab = tabs.find( item => item.active);

  switch (currentTab.id) {
    case 1: {
      return sortPrice(tickets)
    }
    case 2: {
      return sortDuration(tickets)
    }
    default: return tickets;
  }

}