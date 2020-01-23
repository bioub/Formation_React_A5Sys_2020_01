import { connect } from 'react-redux';
import { selectSelectedPrenom } from '../store/selectors';
import { Hello } from "../components/Hello";

function mapStateToProps(state, ownProps) {
  return {
    name: selectSelectedPrenom(state),
  };
}

const enhance = connect(mapStateToProps);
export const HelloContainer = enhance(Hello);


