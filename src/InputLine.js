import React from "react";
import Button from "./Button";

export default function InputLine({
  addNewItem,
  value,
  onChange,
  handleKeyPress
}) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="input"
        onKeyPress={handleKeyPress}
      />
      <Button onClick={addNewItem}>Hozzáadás</Button>
    </div>
  );
}
