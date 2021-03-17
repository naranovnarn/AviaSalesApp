import React from "react";
import classes from "./Message.module.scss";

const Message = () => {
  return (
    <div className={classes.Message}>
      <div className={classes.Message__main}>Выберите фильтр</div>
      <div className={classes.Message__text}>Рейсов, подходящих под заданные фильтры, не найдено</div>
    </div>
  );
};

export default Message;
