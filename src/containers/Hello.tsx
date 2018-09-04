import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from "../actions/";
import { StoreState } from "../types/index";

import Hello from "../components/Hello";

export function mapStateToProps({ enthusiasmLevel, name }: StoreState) {
  return {
    enthusiasmLevel,
    name: `${name}`
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
