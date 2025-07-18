import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { MakeLi } from "./Item";
import "./App.css";

function App() {
  const [val, setVal] = useState('My');
  const [list, setList] = useState(["books - default"]);
  
  function updateName(e){
    setVal(e.target.value);
  }

  function updateList(){
    setList([...list,val]);
  }
  
  return (
    <>
      <div className="container">
        <h1>{val} first react project</h1>
        <div className="inputContainer">
          <input
            onChange={updateName}
            className="input"
            type="text"
            placeholder="Enter your list Item"
          />

          {/* <input className="input-btn" type="button" value="Add Item" /> */}
          <button onClick={updateList} className="input-btn">Add Item</button>
        </div>

        <div className="filter">
          <input className="input" type="text" placeholder="Search Item" />
        </div>

        <ul className="list">
          <MakeLi key={"dummy"} text={"static item"} />
         {list.map((ele,i)=>{
          return <MakeLi key={i} text={ele}></MakeLi>})}
        </ul>
      </div>
      
    </>
  );
}

export default App;
