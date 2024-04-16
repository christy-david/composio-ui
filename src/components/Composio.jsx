import { useContext } from "react"
import { Context } from "../contexts/Context"

const Composio = () => {
  const { dataState, dataDispatch } = useContext(Context)

  return (
    <input
      className='outline-none border rounded border-black p-2 w-full'
      type='text'
      placeholder='Your Composio API key'
      value={dataState.composio}
      onChange={(e) => dataDispatch({ payload: { composio: e.target.value } })}
    />
  )
}

export default Composio
