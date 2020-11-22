import React from 'react';
import {Wrapper, Row, Column, Number} from './styles';
import {Caption, Body, Icon} from '../../index';

const Transactions = ({value, date, transaction_name, service, type}) => {
  return (
    <Wrapper>
      <Row>
        <Icon service={service} />
        <Column>
          <Body label={transaction_name} />
          <Caption label={date} />
        </Column>
        <Number>
          <Body
            label={type === '1' ? '+ ' + value : '- ' + value}
            transaction={type}
          />
        </Number>
      </Row>
    </Wrapper>
  );
};

export default Transactions;
