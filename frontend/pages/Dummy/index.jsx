import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';

/* eslint-disable react/prefer-stateless-function */
/**
 * DummyPage.
 */
class DummyPage extends Component {
  static propTypes = {
    AppBar: PropTypes.func.isRequired,
    View: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  /**
   * Renders.
   * @returns {JSX}
   */
  render() {
    const {
      AppBar,
      View,
    } = this.props;
    return (
      <View>
        <AppBar title="dummy title">
          <div>Dummy Page</div>
        </AppBar>
      </View>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default connect(DummyPage);
