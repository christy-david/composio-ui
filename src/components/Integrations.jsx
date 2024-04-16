import { useContext, useEffect, useState } from "react"
import { Context } from "../contexts/Context"
import Loader from "./Loader"

const Integrations = () => {
  const { dataState, dataDispatch } = useContext(Context)

  const [integrations, setIntegrations] = useState([])

  useEffect(() => {
    const execute = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_HOST}integrations/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              composioApiKey: dataState.composio,
            }),
          }
        )
        if (response.ok) {
          let data = await response.json()
          if (data?.items) {
            data = data["items"].filter((item) => item.enabled)
            setIntegrations(data)
          }
        } else {
          console.error("Failed")
        }
      } catch (error) {
        console.error("Error:", error)
      }
    }

    execute()
  }, [])

  return (
    <>
      {integrations.length === 0 ? (
        <Loader />
      ) : (
        <select
          className='outline-none border rounded border-black p-2 text-sm w-full capitalize bg-white'
          value={dataState.integration}
          onChange={(e) =>
            dataDispatch({ payload: { integration: e.target.value } })
          }
        >
          <option value={""}></option>
          {integrations.map((item) => {
            return (
              <option className='capitalize' key={item.id} value={item.id}>
                {item.appName}
              </option>
            )
          })}
        </select>
      )}
    </>
  )
}

export default Integrations
