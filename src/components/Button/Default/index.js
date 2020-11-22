import React from 'react';
import {Wrapper, Label, Icon} from './styles';

const Default = ({onPress, label, marginTop, marginBottom}) => {
  const shadowEffect = {
    elevation: 10,
    shadowOffset: {width: 0, height: -1},
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    zIndex: 999,
  };

  return (
    <Wrapper
      onPress={onPress}
      style={{...shadowEffect}}
      marginTop={marginTop}
      marginBottom={marginBottom}>
      <Label>{label}</Label>
      <Icon name="arrow-right-l" size={16} />
    </Wrapper>
  );
};

export default Default;
