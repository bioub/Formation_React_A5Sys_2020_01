import React from 'react';

export function TodoItem({todo}) {
  console.log('render TodoItem');
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
      <button>-</button>
    </div>
  );
}