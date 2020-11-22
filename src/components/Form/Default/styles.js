import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {theme} from '../../../theme/globalStyles';

export const Form = styled.View`
  width: 100%;
`;

export const Input = styled(TextInput)`
  font-family: ${theme.fontFamily.italic};
  font-style: italic;
  font-weight: normal;
  font-size: ${theme.fontSize.regular};
  text-align: left;
  color: ${theme.color.dark};
  margin-bottom: 45px;
`;
