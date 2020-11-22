import React from 'react';
import {Wrapper, Label, Button} from './styles';

const TypeTransaction = ({
  revenueColor,
  onPress,
  revenueLabel,
  expensesColor,
  expensesLabel,
}) => {
  return (
    <Wrapper>
      <Button style={{backgroundColor: revenueColor}} onPress={onPress}>
        <Label style={{color: revenueLabel}}>Receitas</Label>
      </Button>
      <Button style={{backgroundColor: expensesColor}} onPress={onPress}>
        <Label style={{color: expensesLabel}}>Despesas</Label>
      </Button>
    </Wrapper>
  );
};

export default TypeTransaction;
