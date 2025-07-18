// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { MakeLi } from './components/Item'
import './App.css'

function App() {

  return (
    <>
      <h1>My first react project</h1>  
      <div className="container">
        <div className="input">

        </div>

        <div className="filter">

        </div>

        <ul className="list">
          <MakeLi text={"hi this is me"} />
          <li>hello</li>
          <li>hello</li>
        </ul>
      </div>
    </>
  )
}

export default App
