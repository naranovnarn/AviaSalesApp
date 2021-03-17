
import React from 'react';
import { useSelector } from 'react-redux';
import Ticket from '../Ticket';
import { filterTickets } from '../../utils';
import { tabFilterTickets } from '../../utils';
import Message from '../Message';

const TicketList = () => {

  const tickets = useSelector(({tickets}) => tickets);
  const filters = useSelector(({filters}) => filters);
  const tabs = useSelector(({tabs}) => tabs);

  const filteredTicketList = filterTickets(tickets, filters);

  const tabFilteredTicketList = tabFilterTickets(filteredTicketList, tabs);

  const isEnabledFilter = filters.every((item) => !item.enabled);

  const ticketsList = tabFilteredTicketList.slice(0, 5).map((ticket) => {
    return <Ticket key={`${ticket.id}`} ticket={ticket} />;
  });

  const content = isEnabledFilter ? <Message /> :ticketsList

  return (
    <div>{content}</div>
  )
};

export default TicketList;

