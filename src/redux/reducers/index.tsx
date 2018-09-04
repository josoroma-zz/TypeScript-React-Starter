import { StoreState } from '../../models/StoreState';
import { INCREMENT_VOTES, DECREMENT_VOTES } from '../constants/index';
import { VotesAction } from '../actions';

/**
 * Reducers are just functions that generate changes by creating modified copies of our Application's State,
 * but that have no side effects. In other words, Recucers re what we call Pure Functions.
 */

export const VotesReducer = (state: StoreState, action: VotesAction): StoreState => {
  switch (action.type) {
    case INCREMENT_VOTES:
      return {
        ...state,
        count: Math.min(10, state.count + 1)
      };
    case DECREMENT_VOTES:
      return {
        ...state,
        count: Math.max(1, state.count - 1)
      };
  }

  return state;
}
