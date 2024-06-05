import React, {useState} from 'react';

import evilEye from "../img/evil_eye.jpg";
import strawberry from "../img/strawberry.jpg";
import brown from "../img/brown.jpg";

export const CartContext = React.createContext();

export function CartTracker({children}) {
    const [cart, setCart] = useState([{name: 'Evil Eye Bag', price: "$39.99", src: evilEye}]);

    const addItem = (item) => setCart((prev) => [...prev, item]);

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    );
}