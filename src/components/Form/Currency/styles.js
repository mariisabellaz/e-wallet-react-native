import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import {theme} from '../../../theme/globalStyles';

export const Form = styled.View`
  width: 100%;
`;

export const Input = styled(TextInputMask)`
  font-family: ${theme.fontFamily.italic};
  font-style: italic;
  font-weight: normal;
  text-align: left;
  font-size: ${theme.fontSize.regular};
  color: ${theme.color.dark};
`;
