import React,{useContext} from "react";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, description, price,id }) => {
  const {addItem}=useContext(CartContext);
   
   const addToCartHandler=(enteredUnits) => {
    addItem({
      id:id,
      name:name,
      units:enteredUnits,
      price:price,
    })
   }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <MealItemForm id={id} addToCartHandler={addToCartHandler}/>
    </li>
  );
};

export default MealItem;
