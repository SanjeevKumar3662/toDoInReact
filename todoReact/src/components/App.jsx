// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { MakeLi } from "./Item";
import "./App.css";

function App() {
  // const [val, setVal] = useState('Hello there Mr.');
    
  // }
  return (
    <>
      <div className="container">
        <h1>My first react project</h1>
        <div className="inputContainer">
          <input
            className="input"
            type="text"
            placeholder="Enter your list Item"
          />

          {/* <input className="input-btn" type="button" value="Add Item" /> */}
          <button className="input-btn">Add Item</button>
        </div>

        <div className="filter">
          <input className="input" type="text" placeholder="Search Item" />
        </div>

        <ul className="list">
          <MakeLi text={"first item"} />
          <MakeLi text={"first item"} />
          <MakeLi text={"first item"} />
          <MakeLi text={"first item"} />
          <MakeLi text={"first item"} />
        </ul>
      </div>
      init();
    </>
  );
}

export default App;
