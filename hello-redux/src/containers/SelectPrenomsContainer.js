import { Select } from "../components/Select";
import { connect } from 'react-redux';
import { selectSelectedPrenom } from "../store/selectors";
import { updatePrenom } from "../store/actions";

function mapStateToProps(state, ownProps) {
  return {
    value: selectSelectedPrenom(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSelect(item) {
      dispatch(updatePrenom(item));
    }
  }
}

const enhance = connect(mapStateToProps, mapDispatchToProps);
export const SelectPrenomsContainer = enhance(Select);
