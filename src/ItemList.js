import React from "react";
import OneItem from "./OneItem";

export default function ItemList({ items, deleteItem }) {
  return (
    <>
      {items.map(item => (
        <OneItem {...item} key={item.id} onClick={() => deleteItem(item.id)}>
          {item.text}
        </OneItem>
      ))}
    </>
  );
}
