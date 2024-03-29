import React, { Fragment } from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals-header.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClicked={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table of food" />
      </div>
    </Fragment>
  )
};

export default Header;