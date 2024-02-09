import React, { useEffect, useState, useContext } from "react";
import CartContext from "../context/CartContext";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const context = useContext(CartContext);
  const { items, addItem, removeItem } = context;

  function NumberFormatter(num) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);
  }

  useEffect(() => {
    const getMeals = async () => {
      try {
        const res = await fetch("http://localhost:3000/meals");

        const data = await res.json();
        // console.log("data", data);
        setMeals(data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getMeals();
  }, []);

  const handleAdd = (item) => {
    console.log("first");
    addItem(item);
  };
  return (
    <div>
      <div id="meals">
        {meals.map((meal) => (
          <li className="meal-item" key={meal.id}>
            <article>
              <img src={`http://localhost:3000/${meal.image}`} alt="" />
              <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{NumberFormatter(meal.price)}</p>
                <p className="meal-item-description"> {meal.description}</p>
              </div>
              <p className="meal-item-actions">
                <button onClick={() => handleAdd(meal)}>Add To Cart</button>
              </p>
            </article>
          </li>
        ))}
      </div>
    </div>
  );
}
