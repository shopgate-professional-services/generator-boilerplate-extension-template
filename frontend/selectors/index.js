import { createSelector } from 'reselect';

/**
 * Returns dummies
 * @return {Array}
 */
export const getDummies = createSelector(
  state => state,
  (state) => {
    return [];
  }
);
