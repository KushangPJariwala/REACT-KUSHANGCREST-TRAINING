import React,{useContext} from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../context/CartContext";
import Button from './UI/Button.jsx';
import UserProgressContext from '../context/UserProgressContext.jsx';

export default function Header() {
  const context = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const { items, addItem, removeItem } = context;

  const totalQuant = items.reduce((acc,item)=>{
     return acc+item.quantity
  },0)
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>Reactfood</h1>
      </div>
      <nav>
        <button onClick={handleShowCart}>cart ({totalQuant})</button>
      </nav>
    </header>
  );
}
