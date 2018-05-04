import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';

/* eslint-disable react/prefer-stateless-function */
/**
 * DummyPage.
 */
class DummyPage extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  /**
   * Renders.
   * @returns {JSX}
   */
  render() {
    return null;
  }
}
/* eslint-enable react/prefer-stateless-function */

export default connect(DummyPage);
