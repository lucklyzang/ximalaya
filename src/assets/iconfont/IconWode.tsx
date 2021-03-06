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

let IconWode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M617.328783 574.345649h-214.681279A304.082798 304.082798 0 0 0 98.85879 878.134364a142.924797 142.924797 0 0 0 142.924797 142.630713H778.192701a142.924797 142.924797 0 0 0 144.101133-142.630713 304.082798 304.082798 0 0 0-304.965051-303.788715zM510.576312 540.525996a270.263145 270.263145 0 1 0-270.557229-269.969061 270.557229 270.557229 0 0 0 270.557229 269.969061z m-58.816789-218.210287h127.044264a21.174044 21.174044 0 0 1 20.87996 26.761639 94.106862 94.106862 0 0 1-180.567542 0c-3.823091-13.527861 6.763931-26.761639 32.643318-26.761639z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

IconWode = React.memo ? React.memo(IconWode) : IconWode;

export default IconWode;
