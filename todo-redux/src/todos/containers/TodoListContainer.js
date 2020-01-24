import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";
import { selectItems } from "../selectors";

function mapStateToProps(state) {
  return {
    todos: selectItems(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const enhance = connect(mapStateToProps, mapDispatchToProps);
export const TodoListContainer = enhance(TodoList);