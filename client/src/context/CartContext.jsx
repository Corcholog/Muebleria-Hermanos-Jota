import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Helper to normalize ID access
  const getId = (item) => item._id || item.id;

  const addItem = (item) => {
    const itemId = getId(item);
    const exists = cart.find((i) => getId(i) === itemId);

    if (exists) {
      setCart(
        cart.map((i) =>
          getId(i) === itemId
            ? { ...i, cantidad: (i.cantidad || i.quantity || 1) + 1 }
            : i
        )
      );
    } else {
      // Normalize to 'cantidad' and insure 'precio' exists
      setCart([...cart, { ...item, cantidad: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((i) => getId(i) !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((i) =>
        getId(i) === id ? { ...i, cantidad: Number(newQuantity) } : i
      )
    );
  };

  // Helper methods for cleaner component logic
  const incrementItem = (id) => {
    const item = cart.find(i => getId(i) === id);
    if (item) updateQuantity(id, (item.cantidad || 1) + 1);
  };

  const decrementItem = (id) => {
    const item = cart.find(i => getId(i) === id);
    if (item && item.cantidad > 1) {
      updateQuantity(id, item.cantidad - 1);
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        incrementItem,
        decrementItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
