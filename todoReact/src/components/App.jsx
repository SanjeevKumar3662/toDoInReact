import { useEffect, useState} from "react";
import { Item } from "./Item";
import "./App.css";

/* TODO
  -make it live on vercel 
*/

function App() {
  const [val, setVal] = useState(""); // input value from

  const [list, setList] = useState(() => {
    const stored = localStorage.getItem("list"); // gets the json from storage
    if (stored === null) return ["list is empty"]; // if no list, then make and empty one

    console.log(stored, " useState-> only once at start"); //logging list

    return JSON.parse(stored); //parses json to an array and returns it
  });

  const [isSearching,upadateSearching] = useState(false);// dafault is false
  const [filterdList, updateFL] = useState([]);//default should be []

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list)); //stores updated list to storage
    console.log(list, "in useEffect -> when list is modified");
  }, [list]); // when an ele of arr is modified, it triggers the CB function

  function updateVal(e) {
    setVal(e.target.value);
  }

  function search(e) {
    const target = e.target.value; // value form search field
    target === ""?upadateSearching(false):upadateSearching(true);
     
    console.log(target);
    const show = list.filter((ele) => ele.includes(target)); // filtered list
    console.log(show);

    // if()
    updateFL(show);
  }

  function updateList(e) {
    e.preventDefault(); // stops add btn from submitting the form

    if (val === "") {
      return; // won't add a empty item
    }

    setList([...list, val]); // add val to list
    setVal(""); //current val is not needed,clear the val
  }

  function deleteItem(item) {
    setList(list.filter((ele) => ele !== item));
  }

  return (
    <>
      <div className="container">
        <h1>{val} Sanjeev's first React.js project</h1>
        <form className="inputContainer">
          <input
            value={val} // this makes val a controled input
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
          <input
            onChange={(e) => search(e)}
            className="input"
            type="text"
            placeholder="Search Item"
          />
        </div>

        <ul className="list">
          {/* here list the array that holds the item  
            and for every element of list we will call the Item componenet
          */}
          {

            // if we are searching then show the filtered list else the real list
          isSearching?(filterdList.map((ele, i) => {
            return (
              <Item key={i} text={ele} deleteE={() => deleteItem(ele)}></Item>
            );
          })):(list.map((ele, i) => {
            return (
              <Item key={i} text={ele} deleteE={() => deleteItem(ele)}></Item>
            );
          }))}
          
        </ul>
      </div>
    </>
  );
}

export default App;
