import React from 'react';
import { Route } from '@shopgate/pwa-common/components';
import { withThemeComponents } from '@shopgate-ps/pwa-extension-kit/connectors';
import DummyPage from '../../pages/Dummy';
import connect from './connector';
import { DUMMY_PATH } from '../../constants';

/**
 * @returns {JSX}
 */
export default () => (
  <Route pattern={DUMMY_PATH} component={withThemeComponents(connect(DummyPage))} />);
