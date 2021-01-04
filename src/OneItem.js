import React from "react";
import Button from "./Button";

export default function OneItem({ children, onClick }) {
  return (
    <div>
      <input type="checkbox" />
      <span>{children}</span>
      <Button onClick={onClick}>Törlés</Button>
    </div>
  );
}

// a torles gomb csak egerfolehuzasra: mouseover-rel, csak mar nincs ra idom :(
