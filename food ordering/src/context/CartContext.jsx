import { createContext, useReducer } from "react";
// import { sortUserPlugins } from "vite";

const CartContext = createContext();

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state?.items?.findIndex(
      (item) => item.id === action.item.id
      );
      let updatedItems = [...state.items];
      
      if (existingItemIndex !== -1) {
        let existingItem = state.items[existingItemIndex];
        existingItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        updatedItems[existingItemIndex] = existingItem;
        return { items: updatedItems };
        
      } else {
        const newItem = { ...action.item, quantity: 1 };
        return { items: [...state.items, newItem] };
      }
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
};

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  const cartObj = {
    items: cart.items,
    addItem: (item) => {
      dispatch({ type: "ADD", item });
    },
    removeItem: (id) => {
      dispatch({ type: "REMOVE",id });
    },
  };
  console.log('cartObj.items', cartObj.items)
  return (
    <CartContext.Provider value={cartObj}>{children}</CartContext.Provider>
  );
}
export default CartContext;
