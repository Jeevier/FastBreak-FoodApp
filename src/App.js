import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"
import CartProvider from "./store/CartProvider";
const App = () => {
  const [isCart ,setIsCart]=useState(false);
  const showCartHandler =()=>{
    setIsCart(true);
  }
  const hideCartHandler =()=>{
    setIsCart(false);
  }
  return (
    <CartProvider>
      {isCart && <Cart hideCartHandler={hideCartHandler}/>}
      <Header  showCartHandler={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
