import React from 'react';
import {Wrapper, Button} from './styles';
import {Icon, Body} from '../../index';
import {theme} from '../../../theme/globalStyles';

const TypeService = ({service, label, onPress, click}) => {
  return (
    <Wrapper>
      <Button click={click} onPress={onPress}>
        <Icon
          service={service}
          color={click ? theme.color.dark : theme.color.dusk}
        />
      </Button>
      <Body label={label} marginBottom={10} marginTop={2} />
    </Wrapper>
  );
};

export default TypeService;
