import React from 'react';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

const SpecificIcon = props => {
  const { iconComponent } = props;

  let SpecificIcon;

  if (iconComponent == 'MaterialCommunityIcons') {
    SpecificIcon = MaterialCommunityIcons;
  } else if (iconComponent == 'Foundation') {
    SpecificIcon = Foundation;
  }

  return <SpecificIcon {...props} />;
};

export default SpecificIcon;
