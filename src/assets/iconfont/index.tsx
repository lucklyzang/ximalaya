/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconHuanyipi from './IconHuanyipi';
import IconArrowRight from './IconArrowRight';
import IconXihuan from './IconXihuan';
import IconPlay from './IconPlay';
import Icon31Shouyexuanzhong from './Icon31Shouyexuanzhong';
import IconIcon from './IconIcon';
import IconFaxian from './IconFaxian';
import IconShoucang from './IconShoucang';
import IconWode from './IconWode';
import IconShouye from './IconShouye';
import IconShouye1 from './IconShouye1';
import IconShouyeTianchong from './IconShouyeTianchong';
export { default as IconHuanyipi } from './IconHuanyipi';
export { default as IconArrowRight } from './IconArrowRight';
export { default as IconXihuan } from './IconXihuan';
export { default as IconPlay } from './IconPlay';
export { default as Icon31Shouyexuanzhong } from './Icon31Shouyexuanzhong';
export { default as IconIcon } from './IconIcon';
export { default as IconFaxian } from './IconFaxian';
export { default as IconShoucang } from './IconShoucang';
export { default as IconWode } from './IconWode';
export { default as IconShouye } from './IconShouye';
export { default as IconShouye1 } from './IconShouye1';
export { default as IconShouyeTianchong } from './IconShouyeTianchong';

export type IconNames = 'icon-huanyipi' | 'icon-arrow-right' | 'icon-xihuan' | 'icon-play' | 'icon-31shouyexuanzhong' | 'icon-icon-' | 'icon-faxian' | 'icon-shoucang' | 'icon-wode' | 'icon-shouye' | 'icon-shouye1' | 'icon-shouye-tianchong';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-huanyipi':
      return <IconHuanyipi key="1" {...rest} />;
    case 'icon-arrow-right':
      return <IconArrowRight key="2" {...rest} />;
    case 'icon-xihuan':
      return <IconXihuan key="3" {...rest} />;
    case 'icon-play':
      return <IconPlay key="4" {...rest} />;
    case 'icon-31shouyexuanzhong':
      return <Icon31Shouyexuanzhong key="5" {...rest} />;
    case 'icon-icon-':
      return <IconIcon key="6" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="7" {...rest} />;
    case 'icon-shoucang':
      return <IconShoucang key="8" {...rest} />;
    case 'icon-wode':
      return <IconWode key="9" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="10" {...rest} />;
    case 'icon-shouye1':
      return <IconShouye1 key="11" {...rest} />;
    case 'icon-shouye-tianchong':
      return <IconShouyeTianchong key="12" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
