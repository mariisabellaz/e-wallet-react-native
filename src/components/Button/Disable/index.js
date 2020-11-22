import React from 'react';
import {Wrapper, Label, Icon} from './styles';

const Disable = ({label, marginTop, marginBottom}) => {
  return (
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <Label>{label}</Label>
      <Icon name="arrow-right-l" size={16} />
    </Wrapper>
  );
};

export default Disable;
