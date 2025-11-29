import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

// The Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.find((item) => item.id === action.payload.id);

      // Get quantity from the payload, or default to 1 if not provided
      const quantityToAdd = action.payload.qty || 1;

      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + quantityToAdd } // Add new qty to existing qty
            : item
        );
      }
      // Add new item with the specific quantity
      return [...state, { ...action.payload, qty: quantityToAdd }];

    case "REMOVE":
      return state.filter((item) => item.id !== action.payload.id);
    
    case 'CLEAR':
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("shopping-cart")) || [];
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
