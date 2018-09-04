import * as constants from '../constants';

/**
 * Set of actions and functions that can create these actions.
 */

export interface IncrementVotes {
  type: constants.INCREMENT_VOTES;
}

export interface DecrementVotes {
  type: constants.DECREMENT_VOTES;
}

/**
 * To describe cases where an action could be an increment or a decrement.
 */

export type VotesAction = IncrementVotes | DecrementVotes;

/**
 * Functions that actually manufacture the actions which we can use instead of writing out bulky object literals.
 */

export const incrementVotes = (): IncrementVotes => (
  {
    type: constants.INCREMENT_VOTES,
  }
);

export const decrementVotes = (): DecrementVotes => (
  {
    type: constants.DECREMENT_VOTES,
  }
);
