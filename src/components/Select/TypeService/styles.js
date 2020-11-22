import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../../../theme/globalStyles';

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Button = styled(TouchableOpacity)`
  width: ${theme.metrics.service};
  height: ${theme.metrics.service};
  background: ${props => (props.click ? theme.color.mongo : theme.color.ice)};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
