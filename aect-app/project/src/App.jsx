/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './output.css'
import HomePage from './component/main_component/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="bg-main-bg font-basic-font-family text-basic-text-color font-medium">
      <HomePage></HomePage>
    </div>
    </>
  )
}

export default App
