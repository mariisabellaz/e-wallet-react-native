import styled from 'styled-components/native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {theme} from '../../../theme/globalStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const Wrapper = styled(BorderlessButton)`
  width: 190px;
  height: ${theme.metrics.button};
  background: ${theme.color.mongo};
  border-radius: ${theme.metrics.radius};
  align-items: center;
  justify-content: center;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  flex-direction: row;
`;

export const Label = styled.Text`
  color: ${theme.color.dark};
  font-style: normal;
  font-weight: 600;
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.regular};
  align-items: center;
  text-align: center;
`;

export const Icon = styled(Fontisto)`
  color: ${theme.color.dark};
  align-self: center;
  margin-left: 5px;
`;
