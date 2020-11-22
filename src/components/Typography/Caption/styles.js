import styled from 'styled-components/native';
import {theme} from '../../../theme/globalStyles';

export const Label = styled.Text`
  font-family: ${theme.fontFamily.regular};
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fontSize.helper};
  letter-spacing: 0.06px;
  color: ${props => (props.color ? props.color : theme.color.gray)};
  text-align: left;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  opacity: 0.5;
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'none'};
`;
