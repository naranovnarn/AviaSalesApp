import React from 'react';
import classes from './MenuFilter.module.scss';

import Filter from '../Filter';
import { changeFilter } from '../../actionCreators';
import { useDispatch, useSelector } from 'react-redux';

const MenuFilter = () => {

  const dispatch = useDispatch();

  const changeFilterHandler = (title) => {
    dispatch(changeFilter(title));
  }

  const filters = useSelector(({filters}) => filters);

  const filterList = filters.map((filter) => {

    return <Filter key={filter.title} data={filter} changeFilterHandler={changeFilterHandler} />
    
  });


  return (
    <div className={classes.MenuFilter}>
      <div className={classes.MenuFilter__title}>
        Количество пересадок
      </div>
      {filterList}
    </div>
  );
}


export default MenuFilter;