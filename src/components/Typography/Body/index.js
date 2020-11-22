import React from 'react';
import {Label} from './styles';

const Body = ({
  label,
  marginBottom,
  marginTop,
  color,
  style,
  textTransform,
  textAlign,
}) => {
  return (
    <Label
      color={color}
      textTransform={textTransform}
      marginBottom={marginBottom}
      marginTop={marginTop}
      style={style}
      textAlign={textAlign}>
      {label}
    </Label>
  );
};

export default Body;
