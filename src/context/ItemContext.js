import React from 'react';

// Images
import evilEye from "../img/evil_eye.jpg";
import strawberry from "../img/strawberry.jpg";
import brown from "../img/brown.jpg";
import skull from "../img/skull.jpg";
import mushroom from "../img/mushroom.jpg";

export const ItemContext = React.createContext();

export const ItemInfo = ({children}) => {
    const list = [{name: 'Evil Eye Bag', price: "$39.99", src: evilEye}, {name: 'Strawberry Bag', price: "$39.99", src: strawberry}, {name: 'Brown Heart Bag', price: "$39.99", src: brown}, {name: 'Skull Crochet Bag', price: "$39.99", src: skull}, {name: 'Mushroom Bag', price: "$39.99", src: mushroom}];

    return (
        <ItemContext.Provider value={list}>
            {children}
        </ItemContext.Provider>
    );
}
