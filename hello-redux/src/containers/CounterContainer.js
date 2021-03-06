import { Counter } from "../components/Counter";
import { connect } from 'react-redux';
import { INCREMENT_COUNTER } from "../store/constants";
import { incrementCounter } from "../store/actions";
import { selectCount } from "../store/selectors";

// export function CounterContainer() {
//   return (
//     <Counter count={store.getState().count}
//       onClick={() => store.dispatch({type: 'INCREMENT_COUNTER'})}
//       />
//   )
// }

/*
state :
{ 
  counters: {
    users: 10,
  }
}

props :
{
  count: 0
}
*/

function mapStateToProps(state, ownProps) {
  return {
    count: selectCount(state, ownProps.id),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick() {
      dispatch(incrementCounter(ownProps.id));
    }
  }
}

const enhance = connect(mapStateToProps, mapDispatchToProps);
export const CounterContainer = enhance(Counter);

/*
Exercice :
Ajouter selectedPrenom: 'Jean' dans le state initial

Modifier le rootReducer pour qu'il traite l'action :
{
  type: 'SELECT_PRENOM',
  payload: 'Paul',
}

en altérant le state
{
  count: 11,
  selectedPrenom: 'Paul',
}

Créer un HelloContainer qui connecte selectedPrenom à la props name de Hello

Créer un SelectContainer qui connecte la clé selectedPrenom à la props value
Ajouter un mapDispatchToProps pour dispatcher l'action
{
  type: 'SELECT_PRENOM',
  payload: 'Paul',
}
sur le callback onSelect
<SelectContainer items={['Jean', 'Eric', 'Paul']} />
*/

