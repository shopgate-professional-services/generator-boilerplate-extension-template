import React from 'react';
import PropTypes from 'prop-types';
import Route from '@shopgate/pwa-common/components/Router/components/Route';
import { DUMMY_PATH } from '../constants';
import pageComponentFactory from './PageComponentFactory';
import DummyPage from '../pages/Dummy';

/**
 * Dummy route.
 * @param {function} View View component proto.
 * @returns {JSX}
 */
const Dummy = ({ View }) => (
  <Route
    path={DUMMY_PATH}
    component={pageComponentFactory({
      View,
      ComponentProto: DummyPage,
    })}
  />
);

Dummy.propTypes = {
  View: PropTypes.func.isRequired,
};

export default Dummy;

