import React from 'react';
import classes from './Tabs.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../../actionCreators';


const Tabs = () => {

  const tabs = useSelector(({tabs}) => tabs);

  const dispatch = useDispatch();

  const changeTabHandler = (id) => {
    dispatch(changeTab(id))
  }

  return (
    <div className={classes.Tabs}>
      {tabs.map((tab) => {
        const { label, id, active } = tab;

        const className = cn({
          [classes.Tabs__item]: true,
          [classes.Tabs__item_active]: active,
        });

        return (
          <button 
            className={className}
            key={id}
            onClick={() => changeTabHandler(id)}
          >{label}</button>);
      })}
    </div>
  );
};


export default Tabs;
