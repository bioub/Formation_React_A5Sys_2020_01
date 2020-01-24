import css from "./TodoList.module.scss";
import React, { Component, PureComponent, memo } from "react";
import { TodoItem } from "./TodoItem";

// export function TodoList({todos = []}) {
//   const todoItemsJsx = todos.map((t) => <TodoItem key={t.id} todo={t} />);
//   return (
//     <div className={css.TodoList}>
//       {todoItemsJsx}
//     </div>
//   );
// }

// export class TodoList extends PureComponent {
//   // shouldComponentUpdate(newProps) {
//   //   return this.props.todos !== newProps.todos;
//   // }
//   render() {
//     const { todos = [] } = this.props;
//     const todoItemsJsx = todos.map(t => <TodoItem key={t.id} todo={t} />);
//     return <div className={css.TodoList}>{todoItemsJsx}</div>;
//   }
// }

function TodoListComponent({todos = []}) {
  const todoItemsJsx = todos.map((t) => <TodoItem key={t.id} todo={t} />);
  return (
    <div className={css.TodoList}>
      {todoItemsJsx}
    </div>
  );
}

export const TodoList = memo(TodoListComponent);