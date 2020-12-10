import React, { createContext, useState } from 'react'
import {
  initialCards,
  initialInventory,
  initialDecks,
} from "../mockdata/CardData";
import Store from "../components/Store"

export const AppContext = createContext()

function AppContextProvider({ children }) {
    const [applicationState, setApplicationState] = useState({ inventory: initialInventory, decks: initialDecks });

    return (
        <AppContext.Provider value={{...applicationState, cards: initialCards,  }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;