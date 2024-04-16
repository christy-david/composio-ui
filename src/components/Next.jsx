/* eslint-disable react/prop-types */

import { useContext, useRef } from "react"
import { Context } from "../contexts/Context"

const Next = ({ next }) => {
  const nextRef = useRef()
  const { uiDispatch } = useContext(Context)

  const loadNext = () => {
    uiDispatch({
      type: nextRef.current.dataset.next,
      reference: nextRef.current,
    })
  }

  return (
    <div className='flex items-center justify-center'>
      <button ref={nextRef} data-next={next} type='button' onClick={loadNext}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-7 h-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
        <span className='sr-only'>Next</span>
      </button>
    </div>
  )
}

export default Next
