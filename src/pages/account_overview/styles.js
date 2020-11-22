import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {theme} from '../../theme/globalStyles';

export const ApplicationProvider = styled.View`
  flex: 1;
  background-color: ${theme.color.white};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const Wrapper = styled.View`
  padding: ${theme.defaultPadding};
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const LoadingWrapper = styled.View`
  margin-top: ${Dimensions.get('window').height / 3 - 30};
`;

export const Content = styled.View``;
