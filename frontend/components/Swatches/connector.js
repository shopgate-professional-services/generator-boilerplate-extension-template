import { connect } from 'react-redux';
import { getSwatches } from '../../selectors';

/**
 * @param {Object} state The current application state.
 * @return {Object}
 */
const mapStateToProps = state => ({
  swatches: getSwatches(state),
});

export default connect(mapStateToProps);
