import React,{useRef ,useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({id ,addToCartHandler}) => {
  const [amountIsValid ,setAmountIsValid]=useState(true)
  const unitsInputRef=useRef();
  const handleSubmit =(e)=>{
    e.preventDefault();
    const enteredUnits= +unitsInputRef.current.value;
    if(enteredUnits<1 || enteredUnits>5){
      setAmountIsValid(false);
      return;
    }
    addToCartHandler(enteredUnits)
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
      ref={unitsInputRef}
        label="Amount"
        input={{
          id: "amount_" +id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ ADD</button>
      {!amountIsValid && <p>Please enter a valid quantity (1-5).</p> }
    </form>
  );
};

export default MealItemForm;
