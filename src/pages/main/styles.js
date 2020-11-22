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
  padding-horizontal: ${theme.defaultPadding};
  padding-bottom: ${theme.defaultPadding};
  justify-content: center;
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  height: ${Dimensions.get('window').height};
  width: ${Dimensions.get('window').width / 3};
`;

export const Row = styled.View`
  flex-direction: row;
`;
