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

let IconPlay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m-64 141.312a42.666667 42.666667 0 0 1 22.741333 6.570667l176.533334 111.232a42.666667 42.666667 0 0 1 0.32 71.978667l-176.533334 113.429333A42.666667 42.666667 0 0 1 405.333333 621.973333v-224.64a42.666667 42.666667 0 0 1 42.666667-42.666666z m21.333333 81.322667v146.922667l115.456-74.176L469.333333 435.968z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPlay.defaultProps = {
  size: 18,
};

IconPlay = React.memo ? React.memo(IconPlay) : IconPlay;

export default IconPlay;
