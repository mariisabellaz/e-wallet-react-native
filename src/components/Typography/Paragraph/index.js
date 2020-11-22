import React from 'react';
import {Label} from './styles';

const Paragraph = ({label, marginBottom, marginTop, color, textTransform}) => {
  return (
    <Label
      color={color}
      textTransform={textTransform}
      marginBottom={marginBottom}
      marginTop={marginTop}>
      {label}
    </Label>
  );
};

export default Paragraph;
