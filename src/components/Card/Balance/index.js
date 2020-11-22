import React from 'react';
import {Wrapper, Row, Column, Money} from './styles';
import {CircleButton, Heading, Paragraph, Body} from '../../index';
import {theme} from '../../../theme/globalStyles';
import {FORMAT_PRICE} from '../../../utils/format';

const Balance = ({onPress, value}) => {
  return (
    <Wrapper>
      <Row>
        <Column>
          <Heading label={FORMAT_PRICE(value)} />
          <Body
            label="Saldo atual"
            color={theme.color.steel}
            style={'italic'}
          />
        </Column>
        <CircleButton onPress={onPress} />
      </Row>
    </Wrapper>
  );
};

export default Balance;
