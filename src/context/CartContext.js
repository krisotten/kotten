import React, {useState} from 'react';

export const CartContext = React.createContext();

export function CartTracker({children}) {
    const [cart, setCart] = useState([]);

    const addItem = (item) => setCart(cart => [...cart, item]);

    const removeItem = (item) => {
        const newCart = cart.filter(i => i.name !== item.name);
        setCart(newCart);
    };

    const decrement = (name) => {
        const newCart = cart.map(i => {
            if (i.name === name) {
                i.amount -= 1;
                return i;
            }
            return i;
        });
        setCart(newCart);
    }

    const increment = (name) => {
        const newCart = cart.map(i => {
            if (i.name === name) {
                i.amount += 1;
                return i;
            }
            return i;
        });
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, decrement, increment}}>
            {children}
        </CartContext.Provider>
    );
}