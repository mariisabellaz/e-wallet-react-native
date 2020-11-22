import React from 'react';
import {Label} from './styles';

const Slogan = ({label, marginBottom, marginTop, color}) => {
  return (
    <Label color={color} marginBottom={marginBottom} marginTop={marginTop}>
      {label}
    </Label>
  );
};

export default Slogan;
