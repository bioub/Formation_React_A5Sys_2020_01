import { connect } from "react-redux";
import { TodoForm } from "../components/TodoForm";
import { selectInputValue } from "../selectors";
import { updateTodosInput, addTodo } from "../actions";

function mapStateToProps(state) {
  return {
    todoValue: selectInputValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoValueChange(value) {
      dispatch(updateTodosInput(value));
    }, 
    onAdd(value) {
      dispatch(addTodo(value));
    }
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);
export const TodoFormContainer = enhance(TodoForm);