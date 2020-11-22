import React from 'react';
import {ApplicationProvider, Row, Wrapper, ImageBackground} from './styles';
import {Button, Heading, Body} from '../../components';
import background from '../../assets/images/background.png';
import {Logo} from '../../assets/svg';
import {theme} from '../../theme/globalStyles';

const MainScreen = ({navigation}) => {
  return (
    <ApplicationProvider>
      <Row>
        <ImageBackground source={background} />
        <Wrapper>
          <Logo width={60.65} height={40} />
          <Heading label="eWallet" marginBottom={20} marginTop={5} />
          <Body
            label="Acesse o eWallet para ter uma soluções de controle financeiro digital."
            color={theme.color.steel}
            marginBottom={25}
          />
          <Body
            label="Rápido, simples e grátis"
            color={theme.color.steel}
            marginBottom={15}
          />
          <Button
            label="Entrar"
            onPress={() => navigation.navigate('AccountOverview')}
          />
        </Wrapper>
      </Row>
    </ApplicationProvider>
  );
};
export default MainScreen;
