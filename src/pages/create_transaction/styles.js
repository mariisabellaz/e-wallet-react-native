import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {theme} from '../../theme/globalStyles';

const APP_BAR_HEIGHT = Platform.select({
  ios: 44,
  android: 56,
  default: 64,
});

export const ApplicationProvider = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.color.white};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const Wrapper = styled.View`
  margin-top: ${APP_BAR_HEIGHT};
  padding-horizontal: ${theme.defaultPadding};
  flex: 1;
`;

export const ServiceWrapper = styled.View`
  width: 100%;
`;

export const Row = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Empty = styled.View`
  width: ${theme.metrics.service};
  height: ${theme.metrics.service};
  background: ${theme.color.white};
`;
