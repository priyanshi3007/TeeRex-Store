
import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
  
            fetch( 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json').then(response=>response.json()).then(dt=>{
        
            setProducts(dt);
            console.log(dt) 
            })
    
    };

    fetchProducts();
  }, []);


  const addToCart = (product) => {
   const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const newQuantity = existingItem.quantity + 1;
      if (newQuantity > product.quantity) {
     
        alert(`Cannot add more than ${product.quantity} ${product.name}`);
        return;
      }

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      if (1 > product.quantity) {
     
        alert(`Cannot add more than ${product.quantity} ${product.name}`);
        return;
      }
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };


  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };



   

  return <ProductContext.Provider value={{ products ,addToCart, cart,increaseQuantity,decreaseQuantity,removeItem,clearCart }}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
