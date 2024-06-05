import React, {useState} from 'react';

import evilEye from "../img/evil_eye.jpg";
import strawberry from "../img/strawberry.jpg";
import brown from "../img/brown.jpg";

export const CartContext = React.createContext();

export function CartTracker({children}) {
    const [cart, setCart] = useState([]);

    const addItem = (item) => setCart(cart => [...cart, item]);

    const removeItem = (item) => setCart(cart.splice(cart.indexOf(item), 1));

    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}