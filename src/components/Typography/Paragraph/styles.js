import styled from 'styled-components/native';
import {theme} from '../../../theme/globalStyles';

export const Label = styled.Text`
  font-family: ${theme.fontFamily.regular};
  font-style: normal;
  font-weight: 500;
  font-size: ${theme.fontSize.regular};
  color: ${props => (props.color ? props.color : theme.color.dark)};
  text-align: left;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'none'};
`;
