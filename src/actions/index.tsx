import * as constants from '../constants'

/**
 * Set of actions and functions that can create these actions.
 */

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

/**
 * To describe cases where an action could be an increment or a decrement.
 */

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

/**
 * Functions that actually manufacture the actions which we can use instead of writing out bulky object literals.
 */

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}
