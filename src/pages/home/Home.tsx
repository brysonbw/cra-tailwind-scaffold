import React from 'react'
import logo from '../../assets/logo.png'
import { useCounter } from '../../context/CounterContext'

type Props = {}

const Home = (props: Props) => {
// counter context
const {count, increment} = useCounter()

  return (
    <div>
<img src={logo} className="logo" alt="logo" />
<button onClick={increment} className="text-md mx-auto w-full py-3 hover:-translate-y-1 hover:scale-110 duration-300 px-3 bg-[#6563FF] rounded-full text-center text-white">
Count (Increment): {count}
</button>
<a href='https://github.com/brysonbw/cra-tailwind-scaffold'>
<h1 className="text-md mx-auto w-full py-3 hover:-translate-y-1 hover:scale-110 duration-300 px-3 bg-[#6563FF] rounded-full text-center text-white my-8">CRA Tailwind Scaffold</h1>
</a>

</div>
  )
}

export default Home