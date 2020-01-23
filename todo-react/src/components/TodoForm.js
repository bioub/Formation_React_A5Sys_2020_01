import React, {Component} from "react";

function handleSubmit(event, cb, value) {
  event.preventDefault();
  cb(value);
}

export function TodoForm({todoValue, onTodoValueChange, onAdd}) {
  return (
    <div className="TodoForm">
      <form onSubmit={(event) => handleSubmit(event, onAdd, todoValue)}>
        <input value={todoValue} onChange={(event) => onTodoValueChange(event.target.value)}/>
        <button>+</button>
      </form>
    </div>
  );
}
