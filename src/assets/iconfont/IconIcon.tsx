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

let IconIcon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.88 364.8l-1.28-10.08a236.96 236.96 0 0 0-6.24-28 201.44 201.44 0 0 0-42.56-80 46.08 46.08 0 0 0-3.84-4.48 212 212 0 0 0-160-71.68c-75.68 0-146.72 29.76-185.12 74.08-38.4-44.32-109.6-74.08-185.12-74.08a212 212 0 0 0-160 71.68 46.08 46.08 0 0 0-3.84 4.48 201.44 201.44 0 0 0-42.56 80 236.96 236.96 0 0 0-6.24 28l-1.28 10.08A186.4 186.4 0 0 0 112 385.92a205.28 205.28 0 0 0 1.12 21.28c16 194.08 368 423.2 382.88 432.96l16 10.4 16-10.4c15.04-9.6 367.04-238.72 382.88-432.96a205.28 205.28 0 0 0 1.12-21.28 186.4 186.4 0 0 0-1.12-21.12z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIcon.defaultProps = {
  size: 18,
};

IconIcon = React.memo ? React.memo(IconIcon) : IconIcon;

export default IconIcon;
