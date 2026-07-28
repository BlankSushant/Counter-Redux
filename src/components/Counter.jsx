import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../features/counter/counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">

      <h1 className="text-2xl font-semibold tracking-widest uppercase mb-12 text-gray-400">
        Redux Counter
      </h1>

      <div className="text-9xl font-thin mb-12 tabular-nums">
        {count}
      </div>

      <div className="flex gap-6 mb-10">
        <button
          onClick={() => dispatch(decrement())}
          className="w-16 h-16 rounded-full border border-gray-300 text-2xl font-light hover:bg-gray-100 transition-colors"
        >
          −
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="w-16 h-16 rounded-full border border-gray-300 text-2xl font-light hover:bg-gray-100 transition-colors"
        >
          +
        </button>
      </div>

      <button
        onClick={() => dispatch(reset())}
        className="text-sm text-gray-400 underline underline-offset-4 hover:text-gray-600 transition-colors"
      >
        reset
      </button>

    </div>
  )
}

export default Counter
