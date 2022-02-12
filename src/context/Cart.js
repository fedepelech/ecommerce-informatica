import React, { useState } from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const appState = {
        cart,
        setCart
    };

    return (
        <Context.Provider value={appState}>
            {children}
        </Context.Provider>
    );
};

export const ContextConsumer = Context.Consumer;