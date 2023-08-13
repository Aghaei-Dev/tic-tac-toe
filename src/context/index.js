import React, { useState, useContext, createContext } from 'react'
import { useLocalStorage } from '../hook'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', false)
  const toggleTheme = () => setTheme((prev) => !prev)

  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState('')

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        reset,
        setReset,
        winner,
        setWinner,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
