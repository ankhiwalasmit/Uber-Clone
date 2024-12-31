import React, { createContext, useContext, useState } from 'react'

export const captainDataContext = createContext()

const captainContext = ({children}) => {
  const [captain, setCaptain] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const updateCaptain = (captainData) => {
    setCaptain(captainData)
  }

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain
  }

  return (
    <div>
        <captainDataContext.Provider value={ value }>
            {children}
        </captainDataContext.Provider>
    </div>
  )
}

export default captainContext