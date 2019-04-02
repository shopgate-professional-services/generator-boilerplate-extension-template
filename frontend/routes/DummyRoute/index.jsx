import React from 'react';
import { Route } from '@shopgate/pwa-common/components';
import { Theme } from '@shopgate/pwa-common/context';
import { DUMMY_PATH } from '../../constants';

/**
 * @returns {JSX}
 */
function DummyPage() {
  return (
    <Theme>
      {({ View, AppBar }) => (
        <View>
          <AppBar title="DummyRoute" />
          ...
        </View>
      )}
    </Theme>
  );
}

/**
 * @returns {JSX}
 */
export default () => (<Route pattern={DUMMY_PATH} component={DummyPage} />);
