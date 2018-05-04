import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { variables } = themeConfig;

const imgSize = 35;

const wrapper = css({
  margin: `0 ${variables.gap.big}px`,
  marginBottom: 6,
});

const list = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const listItem = css({
  marginRight: 5,
  marginBottom: 10,
});

const img = css({
  width: imgSize,
  height: imgSize,
  borderRadius: '50%',
  border: '3px solid #888',
});

const active = css({
  borderColor: 'black',
});

export default {
  wrapper,
  list,
  listItem,
  img,
  active,
};
