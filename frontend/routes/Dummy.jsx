import React from 'react';
import PropTypes from 'prop-types';
import Route from '@shopgate/pwa-common/components/Router/components/Route';
import { DUMMY_PATH } from '../constants';
import pageComponentFactory from './pageComponentFactory';
import DummyPage from '../Pages/Dummy';

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

Dashboard.propTypes = {
  View: PropTypes.func.isRequired,
};

export default Dummy;

