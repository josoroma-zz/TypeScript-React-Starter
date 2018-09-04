import { EnthusiasmAction } from "../actions";
import { StoreState } from "../types/index";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/index";

/**
 * Reducers are just functions that generate changes by creating modified copies of our Application's State,
 * but that have no side effects. In other words, Recucers re what we call Pure Functions.
 */

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1
      };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }

  return state;
}
