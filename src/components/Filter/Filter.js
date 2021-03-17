import React from 'react';
import classes from './Filter.module.scss';

const Filter = ({ data, changeFilterHandler }) => {

  const { text, title, enabled } = data;

  return (
    <div className={classes.Filter}>
      <label className={classes.check}>
        <input 
          className={classes.check__input}
          type="checkbox"
          onChange={() => changeFilterHandler(title)}
          checked={enabled}
        />
        <span className={classes.check__box} />
        {text}
      </label>
    </div>
  )

}


export default Filter;