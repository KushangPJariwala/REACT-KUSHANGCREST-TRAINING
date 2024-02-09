import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [showCounter, setShowCounter] = useState(false);

  const dispatch = useDispatch();

  const decrement = (n = 1) => {
    dispatch(counterActions.decrement({n}));
  };
  const increament = (n = 1) => {
    dispatch(counterActions.increment({n}));
  };

  const toggleCounterHandler = () => {
    setShowCounter(!showCounter);
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&
        <>
          <div className={classes.value}>{count}</div>
          <div>
            <button style={{ margin: "1rem" }} onClick={() => increament()}>
              increament
            </button>
            <button style={{ margin: "1rem" }} onClick={() => increament(5)}>
              increament (+5)
            </button>
          </div>
          <div>
            <button style={{ margin: "1rem" }} onClick={() => decrement()}>
              decrement
            </button>
            <button style={{ margin: "1rem" }} onClick={() => decrement(5)}>
              decrement (-5)
            </button>
          </div>
        </>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
