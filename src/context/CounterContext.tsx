import React, { createContext, useContext, useState, useEffect } from "react"

// Counter Example

type Props = {
  children: React.ReactNode
}
type Context = {
  count: number
  increment: () => void
}

// find-replace "CounterContext" with a context name you like. (ie. AuthContext)
// for example 'CounterProvider' is wrapped around '<App />' in 'index.tsx'
const CounterContext = createContext<Context | null>(null)

export const CounterProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
  }, [])

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  )
}

// import 'useCounter' anywhere in app to increment
// see 'Home.tsx'
export const useCounter = () => {
  const counterContext = useContext(CounterContext)

  if (!counterContext)
    throw new Error("CounterContext must be called from within the ContextProvider")

  return counterContext
}