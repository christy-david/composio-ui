export const uiReducer = (state, action) => {
  switch (action.type) {
    case "integrations": {
      action.reference.dataset.next = "prompt"
      return {
        ...state,
        integrations: true,
      }
    }

    case "prompt": {
      action.reference.dataset.next = "execute"
      return {
        ...state,
        prompt: true,
      }
    }

    default: {
      return state
    }
  }
}

export const dataReducer = (state, action) => {
  return {
    ...state,
    ...action.payload,
  }
}
