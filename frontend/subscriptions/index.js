import { main$ } from '@shopgate/pwa-common/streams/main';

/**
 * Subscriptions
 * @param {function} subscribe Subscribe.
 */
const dummySubscriptions = (subscribe) => {
  subscribe(main$, ({ dispatch, getState }) => {

  });
};

export default swatchesSubscriptions;
