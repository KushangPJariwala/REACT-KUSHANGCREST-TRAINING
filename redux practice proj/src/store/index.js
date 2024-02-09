// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// const counterReducer = (state = { count: 0 }, action) => {
//   if (action.type === "inc") {
//     return {
//       count: state.count + action.payload.n,
//     };
//   }
//   if (action.type === "dec") {
//     return {
//       count: state.count - action.payload.n,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment(state, action) {
      console.log("first");
      state.count = state.count + action.payload.n;
    },
    decrement(state, action) {
      console.log(action.payload);
      state.count = state.count - action.payload.n;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: { logged: false },
  reducers: {
    login(state) {
      state.logged = true;
    },
    logout(state) {
      state.logged = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
