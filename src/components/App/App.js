import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import classes from './App.module.scss';
import Header from '../Header';
import Tabs from '../Tabs';
import { getData } from '../../actionCreators';
import TicketList from '../TicketList';
import FilterMenu from '../MenuFilter';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getData())

  }, [dispatch])

  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.App__main}>
        <div className={classes.App__aside}>
          <FilterMenu />
        </div>
        <div className={classes.App__content}>
          <Tabs />
          <TicketList />
        </div>
      </div>
    </div>
  );
}

export default App;