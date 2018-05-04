import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '@shopgate/pwa-common/components/Router/components/Link';
import { bin2hex } from '@shopgate/pwa-common/helpers/data';
import { ITEM_PATH } from '@shopgate/pwa-common-commerce/product/constants/index';
import styles from './style';
import connect from './connector';

/**
 * The Product swatches component
 */
class Swatches extends Component {
  static propTypes = {
    swatches: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.string,
      imageUrl: PropTypes.string,
    })),
  };

  static defaultProps = {
    swatches: [],
  };

  /**
   * The render method
   * @return {JSX}
   */
  render() {
    if (!this.props.swatches.length) {
      return null;
    }

    return (
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {this.props.swatches.map(swatch => (
            <li className={styles.listItem} key={swatch.productId}>
              <Link
                tagName="a"
                href={`${ITEM_PATH}/${bin2hex(swatch.productId)}`}
                itemProp="item"
                itemScope
                itemType="http://schema.org/Product"
              >
                <img className={`${styles.img} ${swatch.active ? styles.active : ''}`} src={swatch.imageUrl} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(Swatches);
