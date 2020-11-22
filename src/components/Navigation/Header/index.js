import React from 'react';
import {Wrapper, Row, StatusBar, SafeAreaView} from './styles';
import {Paragraph} from '../../index';
import {Logo, UnionIcon} from '../../../assets/svg';
import {theme} from '../../../theme/globalStyles';

const Header = ({label}) => {
  return (
    <SafeAreaView>
      <Wrapper>
        <StatusBar barStyle="dark-content" />
        <Row>
          <Logo height={31} width={47} />
          <UnionIcon />
        </Row>
        <Paragraph
          label={label}
          color={theme.color.dusk}
          marginTop={15}
          marginBottom={15}
        />
      </Wrapper>
    </SafeAreaView>
  );
};

export default Header;
