import React from "react";
import classes from './Header.module.css';
import meal_image from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={meal_image} alt="A table full of meals."/>
        </div>
    </React.Fragment>
}

export default Header;