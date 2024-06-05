import React, {useState} from 'react';

export const CartContext = React.createContext();

export function CartTracker({children}) {
    const [cart, setCart] = useState([]);

    const addItem = (item) => setCart((prev) => [...prev, item]);

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    );
}