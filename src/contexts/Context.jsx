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
  composio: "0tfsxay9cogcckwmsqp3uen",
  integration: "",
  openai: "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",
  prompt: "Star the repo Meta/React on GitHub",
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
