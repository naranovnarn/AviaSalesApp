import React from 'react';
import classes from './Header.module.scss';
import logo from '../../Images/logo.svg';
import Spinner from '../Spinner';
import { useSelector } from 'react-redux';

const Header = () => {

  const loading = useSelector(({loading}) => loading)

  return (
    <div className={classes.Header}>
      {
        loading ? <img alt="logo" src={logo} /> : <Spinner />
      }
    </div>
  );
}

export default Header;