import React from 'react';

export const ItemContext = React.createContext();

export const ItemInfo = ({children, info}) => {
    return (
        <ItemContext.Provider value={info}>
            {children}
        </ItemContext.Provider>
    );
}
