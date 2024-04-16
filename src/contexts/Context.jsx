/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react"
import { uiReducer, dataReducer } from "../reducers/Reducers"

export const Context = createContext()

const initialUiState = {
  composio: true,
  integrations: false,
  prompt: false,
}

const initialDataState = {
  composio: "",
  integration: "",
  openai: "",
  prompt: "",
}

const Provider = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(uiReducer, initialUiState)
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState)

  return (
    <Context.Provider value={{ uiState, uiDispatch, dataState, dataDispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
