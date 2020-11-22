import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../../../theme/globalStyles';

export const Wrapper = styled(TouchableOpacity)`
  width: ${theme.metrics.button};
  height: ${theme.metrics.button};
  background: ${theme.color.mongo};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

export const Icon = styled(Fontisto)`
  color: ${theme.color.dark};
  align-self: center;
`;
