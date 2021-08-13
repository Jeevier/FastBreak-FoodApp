import React from 'react';
import mealsImg from '../../assests/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=>{
    return<>
    <header className={classes.header}>
        <h1>Fast Break</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImg} alt="MealsImage" />;
    </div>
    </>;
}
export default Header;