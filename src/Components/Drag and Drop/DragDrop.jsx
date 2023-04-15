import React, { useState } from "react";
import "./drag.css";
function DragDrop() {
  const list = [
    {
      id: 1,
      text: "Html",
    },
    {
      id: 2,
      text: "CSS",
    },
    {
      id: 3,
      text: "JavaSCript",
    },
    {
      id: 4,
      text: "React Js",
    },
    {
      id: 5,
      text: "NOde Js",
    },
  ];
  const [listItems, setListItems] = useState(list);
  const [draggedItems, setDraggedItems] = useState([]);
  const [validDrag, setValidDrag] = useState(false)

  const handleDrag = (item) => {
      console.log(item)
     if(validDrag){
      // const lists = [...listItems]
      // const filteredList = lists.filter((data,index) => data.text !== item.text )
      // setListItems(filteredList)
      setDraggedItems([...draggedItems, item])
     } else {
      alert("Please kept items in the container")
     }
  }

  return (
    <>
      <h1>Drag and mapDispatchToPropsBind</h1>
      <div className="container">
        <div className="listItems">
          {listItems.map((item, index) => (
            <div draggable 
            key = {index}
              onDragEnd={() => handleDrag(item) }
              className="items">
              {item.text}
            </div>
          ))}
        </div>
        <div onDragLeave={() => setValidDrag(false)} onDragOver={() => setValidDrag(true)} style={{minWidth : "100px"}} className="draggedItems">
        {draggedItems.map((item, index) => (
            <div    
              key = {index}
              className="items">
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DragDrop;
