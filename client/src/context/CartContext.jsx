import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const exists = cart.find((i) => i._id === item._id);

    if (exists) {
      return setCart(
        cart.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    }

    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((i) => i._id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((i) =>
        i._id === id ? { ...i, quantity: Number(quantity) } : i
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
