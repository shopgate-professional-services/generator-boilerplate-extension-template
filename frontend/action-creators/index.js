import {
  RECEIVE_DUMMIES,
  REQUEST_DUMMIES,
  ERROR_DUMMIES,
} from '../constants';

/**
 * requestDummies action.
 * @param {string} dummyId dummyId.
 * @returns {Object}
 */
export const requestDummies = dummyId => ({
  type: REQUEST_DUMMIES,
  dummyId,
});

/**
 * receiveDummies action.
 * @param {string} dummyId dummyId.
 * @param {Array} dummies dummies.
 * @returns {Object}
 */
export const receiveDummies = (dummyId, dummies) => ({
  type: RECEIVE_DUMMIES,
  dummyId,
  dummies,
});

/**
 * errorDummies action.
 * @param {string} dummyId dummyId.
 * @returns {Object}
 */
export const errorDummies = dummyId => ({
  type: ERROR_DUMMIES,
  dummyId,
});