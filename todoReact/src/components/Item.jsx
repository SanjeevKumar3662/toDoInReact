import "./Item.css"


export function Item({text,deleteE}){
  return <>
  <li className="item">{text} <button className="deleteBtn" onClick={deleteE}> <i>X</i></button></li>
  </>
}