import { useContext } from "react"
import { Context } from "./contexts/Context"
import Dashes from "./components/Dashes"
import Composio from "./components/Composio"
import Integrations from "./components/Integrations"
import Prompt from "./components/Prompt"
import Next from "./components/Next"
import Execute from "./components/Execute"

const App = () => {
  const { uiState } = useContext(Context)

  return (
    <>
      <div className='p-10 flex flex-col justify-center items-center text-sm'>
        <form className='w-96'>
          {uiState.composio && (
            <>
              <Composio />
              <Dashes />
            </>
          )}

          {uiState.integrations && (
            <>
              <Integrations />
              <Dashes />
            </>
          )}

          {uiState.prompt ? (
            <>
              <Prompt />
              <Dashes />
              <Execute />
            </>
          ) : (
            <>
              <Next next={"integrations"} />
            </>
          )}
        </form>
      </div>
    </>
  )
}

export default App
