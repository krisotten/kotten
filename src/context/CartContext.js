import React, {useState} from 'react';

export const CartContext = React.createContext();

export function CartTracker({children}) {
    const [cart, setCart] = useState([]);

    const addItem = (item) => setCart(cart => [...cart, item]);

    const removeItem = (item) => {
        const newCart = cart.filter(i => i.name !== item.name);
        setCart(newCart);
    };

    const increment = (name) => {
        // increase the amount by 1 of the element that has the same name as item
        const index = cart.map(i => i.name).indexOf(name);
        let newCart = cart;
        newCart[index].amount += 1;
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, increment}}>
            {children}
        </CartContext.Provider>
    );
}