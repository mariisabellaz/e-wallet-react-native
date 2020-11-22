import React from 'react';
import {Wrapper, EmptyIllustration} from './styles';
import {Body, Paragraph} from '../index';

import empty_page from '../../assets/images/error-page.png';

const EmptyPage = ({onPress, value}) => {
  return (
    <Wrapper>
      <EmptyIllustration source={empty_page} />
      <Paragraph label="Ops!" marginBottom={5} />
      <Body label="Parece que você não tem nenhuma transação..." />
      <Body label="Que tal adicionar algumas ?" />
    </Wrapper>
  );
};

export default EmptyPage;
