import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });
  const [loading, setLoading] = useState(true);

  // Load cart from backend on mount
  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const data = await cartAPI.getCart();
      setCart(data.cart);
    } catch (error) {
      console.error('Failed to load cart:', error);
      // If not authenticated, start with empty cart
      setCart({ items: [], totalItems: 0, totalPrice: 0 });
    } finally {
      setLoading(false);
    }
  };

  // Add item to cart
  const addToCart = async (product, quantity = 1) => {
    try {
      const data = await cartAPI.addToCart(product.id, quantity);
      setCart(data.cart);
      toast.success(`Added ${product.name} to cart!`);
      return { success: true };
    } catch (error) {
      toast.error(error.message || 'Failed to add to cart');
      return { success: false, error: error.message };
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    try {
      // Find item ID from cart
      const item = cart.items.find(item => item.product._id === productId || item.product.id === productId);
      if (!item) return;
      
      const data = await cartAPI.removeFromCart(item._id);
      setCart(data.cart);
      toast.success('Item removed from cart');
      return { success: true };
    } catch (error) {
      toast.error(error.message || 'Failed to remove item');
      return { success: false, error: error.message };
    }
  };

  // Update item quantity
  const updateQuantity = async (productId, quantity) => {
    try {
      const item = cart.items.find(item => item.product._id === productId || item.product.id === productId);
      if (!item) return;
      
      const data = await cartAPI.updateCartItem(item._id, quantity);
      setCart(data.cart);
      return { success: true };
    } catch (error) {
      toast.error(error.message || 'Failed to update quantity');
      return { success: false, error: error.message };
    }
  };

  // Clear entire cart
  const clearCart = async () => {
    try {
      const data = await cartAPI.clearCart();
      setCart(data.cart);
      toast.success('Cart cleared');
      return { success: true };
    } catch (error) {
      toast.error(error.message || 'Failed to clear cart');
      return { success: false, error: error.message };
    }
  };

  // Calculate totals (for local updates)
  const calculateTotals = (items) => {
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return { totalItems, totalPrice };
  };

  const value = {
    cartItems: cart.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems: () => cart.totalItems,
    getTotalPrice: () => cart.totalPrice,
    loading,
  };

  return (
    <CartContext.Provider value={value}>
      {!loading && children}
    </CartContext.Provider>
  );
};