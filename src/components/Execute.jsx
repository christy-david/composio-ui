import { useContext, useState } from "react"
import { Context } from "../contexts/Context"
import Loader from "./Loader"
import Dashes from "./Dashes"
import Check from "./Check"

const Execute = () => {
  const { dataState } = useContext(Context)
  const [data, setData] = useState()
  const [fetching, setFetching] = useState(false)

  const execute = async () => {
    setFetching((prevState) => !prevState)

    try {
      const response = await fetch(`${import.meta.env.VITE_HOST}execute/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataState),
      })
      if (response.ok) {
        const result = await response.json()
        setData(result)
        setFetching((prevState) => !prevState)
      } else {
        console.error("Failed")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      {fetching ? (
        <>
          <Loader />
        </>
      ) : data ? (
        <>
          <Check />
          <Dashes />
          <p>{JSON.stringify(data)}</p>
        </>
      ) : (
        <button
          onClick={execute}
          type='button'
          className='w-full px-2 py-2.5 bg-blue-600 rounded text-white font-semibold'
        >
          Execute
        </button>
      )}
    </>
  )
}

export default Execute
