import React, { Component } from "react";

export function Counter({ count = 0, onClick = () => {} }) {
  return (
    <div className="Counter">
      <button onClick={onClick}>{count}</button>
    </div>
  );
}
