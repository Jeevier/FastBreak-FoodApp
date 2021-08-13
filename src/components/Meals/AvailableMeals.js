import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pasta",
    description: "Creamy pasta and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Rajma Chawal",
    description: "A Indian specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American, cruncy, tasty! ",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            const { id } = meal;
            return <MealItem key={id} {...meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
