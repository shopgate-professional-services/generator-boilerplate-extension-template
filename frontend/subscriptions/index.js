import { main$ } from '@shopgate/pwa-common/streams/main';

/**
 * Subscriptions
 * @param {func} subscribe Subscribe.
 */
const dummySubscriptions = (subscribe) => {
  subscribe(main$, ({ dispatch, getState }) => {

  });
};

export default dummySubscriptions;
