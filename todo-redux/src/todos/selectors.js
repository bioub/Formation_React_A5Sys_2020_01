// reselect

export function selectTodos(state) {
  return state.todos;
}

export function selectInputValue(state) {
  return selectTodos(state).inputValue;
}

export function selectItems(state) {
  return selectTodos(state).items;
}
