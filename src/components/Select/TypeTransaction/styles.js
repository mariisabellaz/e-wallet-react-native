import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../../../theme/globalStyles';

export const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;

export const Button = styled(TouchableOpacity)`
  width: ${Dimensions.get('window').width / 2 - 30};
  height: 50px;
  border-radius: 12px;
  margin-right: 15px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-family: ${theme.fontFamily.regular};
  font-size: ${theme.fontSize.small};
  font-weight: normal;
  text-align: center;
`;
