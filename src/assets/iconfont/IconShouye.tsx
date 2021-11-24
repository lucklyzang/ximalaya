/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconShouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M98.033 480.211c-10.115 0-20.065-4.783-26.285-13.712-10.102-14.501-6.536-34.446 7.966-44.548l414.033-288.425a32.003 32.003 0 0 1 37.505 0.667l384.137 288.424c14.133 10.612 16.987 30.671 6.376 44.804s-30.67 16.988-44.804 6.375L511.335 199.272l-395.04 275.193a31.845 31.845 0 0 1-18.262 5.746zM831.241 927.64H608.515c-17.673 0-32-14.327-32-32V671.965H448.118V895.64c0 17.673-14.327 32-32 32H188.589c-17.673 0-32-14.327-32-32V513.167c0-17.673 14.327-32 32-32s32 14.327 32 32V863.64h163.529V639.965c0-17.673 14.327-32 32-32h192.397c17.673 0 32 14.327 32 32V863.64h158.727V513.167c0-17.673 14.327-32 32-32s32 14.327 32 32V895.64c-0.001 17.672-14.328 32-32.001 32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShouye.defaultProps = {
  size: 18,
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;
