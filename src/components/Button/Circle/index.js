import React from 'react';
import {Wrapper, Icon} from './styles';

const Circle = ({onPress, marginTop, marginBottom}) => {
  return (
    <Wrapper
      onPress={onPress}
      marginTop={marginTop}
      marginBottom={marginBottom}>
      <Icon name="plus-a" size={17} />
    </Wrapper>
  );
};

export default Circle;
