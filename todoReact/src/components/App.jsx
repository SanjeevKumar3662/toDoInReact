import { useState } from "react";
import { Item } from "./Item";
import "./App.css";

function App() {
  
  const [val, setVal] = useState("My"); // input value from 
  const [list, setList] = useState(["books - default will an empty arr"]);//list that holds item value

  function updateVal(e) {
    setVal(e.target.value);
  }

  function updateList(e) {
    e.preventDefault();// stops add btn from submitting the form
    setList([...list, val]);// add val to list
    setVal("");//current val is not needed clear the val
  }

  function deleteItem(item){
    setList(list.filter((ele=> ele !== item)));
  }

  return (
    <>
      <div className="container">
        <h1>{val} Sanjeev's first react project</h1>
        <form className="inputContainer">
          <input
            onChange={updateVal}
            className="input"
            type="text"
            placeholder="Enter your list Item"
          />

          <button onClick={updateList} className="input-btn">
            Add Item
          </button>
        </form>

        <div className="filter">
          <input className="input" type="text" placeholder="Search Item" />
        </div>

        <ul className="list">
          {/* here list the array that holds the item  
            and for every element of list we will call the Item componenet
          */}
          {list.map((ele, i) => {
            return <Item key={i} text={ele} deleteE={()=>deleteItem(ele)}></Item>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
