import { useContext } from "react"
import { Context } from "../contexts/Context"

const Prompt = () => {
  const { dataState, dataDispatch } = useContext(Context)
  return (
    <>
      <input
        className='outline-none border rounded border-black p-2 w-full'
        type='text'
        placeholder='Your OpenAI API key'
        value={dataState.openai}
        onChange={(e) => dataDispatch({ payload: { openai: e.target.value } })}
      />

      <div className='flex flex-col justify-center items-center'>
        <p>|</p>
      </div>

      <textarea
        className='outline-none border rounded border-black p-2 w-full resize-none'
        rows={4}
        placeholder='Enter your prompt for executing the action'
        value={dataState.prompt}
        onChange={(e) => dataDispatch({ payload: { prompt: e.target.value } })}
      ></textarea>
    </>
  )
}

export default Prompt
