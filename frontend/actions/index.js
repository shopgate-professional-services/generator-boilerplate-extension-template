import { logger } from '@shopgate/pwa-core/helpers';
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import { getDummies } from '../selectors';
import {
  errorDummies,
  receiveDummies,
  requestDummies,
} from '../action-creators';

/**
 * Get product swatches action.
 * @param {string} dummyId dummyId
 * @returns {function}
 */
export const fetchDummies = (dummyId) => (dispatch, getState) => {
  const state = getState();
  const dummies = getDummies(state, dummyId);

  if (!shouldFetchData(dummies)) {
    return;
  }

  dispatch(requestDummies(dummyId));

  new PipelineRequest('dummy')
    .dispatch()
    .then((dummies) => {
      dispatch(receiveDummies(dummyId, dummies));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorDummies(dummyId));
    });
};
