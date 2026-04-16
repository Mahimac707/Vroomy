import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (vehicle) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === vehicle.name);
      if (existing) {
        return prev.map(item =>
          item.name === vehicle.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...vehicle, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCartItems(prev => prev.filter(item => item.name !== name));
  };

  const updateQuantity = (name, qty) => {
    if (qty < 1) return;
    setCartItems(prev =>
      prev.map(item => item.name === name ? { ...item, quantity: qty } : item)
    );
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}