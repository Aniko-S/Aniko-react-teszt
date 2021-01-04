import React, { useState } from "react";
import InputLine from "./InputLine";
import ItemList from "./ItemList";
import "./style.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  const [text, setText] = useState("");

  const addNewItem = text => {
    setId(id => id + 1);
    setItems([{ id, text }, ...items]);
    setText("");
  };

  const deleteItem = id => {
    const temp = items.filter(item => item.id !== id);
    setItems([...temp]);
  };

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      addNewItem(text);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <InputLine
        value={text}
        onChange={e => setText(e.target.value)}
        addNewItem={() => addNewItem(text)}
        handleKeyPress={handleKeyPress}
      />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}
