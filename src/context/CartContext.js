import React, {useState} from 'react';

export const CartContext = React.createContext();

export function CartTracker({children}) {
    const [cart, setCart] = useState([]);

    const addItem = (item) => setCart(cart => [...cart, item]);

    const removeItem = (item) => {
        const newCart = cart.filter(i => i.name !== item.name);
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}