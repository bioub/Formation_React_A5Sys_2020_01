import css from './TodoList.module.scss';
import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({todos = []}) {
  const todoItemsJsx = todos.map((t) => <TodoItem key={t.id} todo={t} />);
  return (
    <div className={css.TodoList}>
      {todoItemsJsx}
    </div>
  );
}