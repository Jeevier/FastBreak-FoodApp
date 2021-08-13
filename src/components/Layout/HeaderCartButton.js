import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const { items } = useContext(CartContext);

  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

  const btnClasses=`${classes.button} ${isBtnHighlighted ? classes.bump : ''}`;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.units;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);

    const timer=setTimeout(() =>{
      setIsBtnHighlighted(false);
    },300)

    return ()=>{
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
