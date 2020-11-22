import styled from 'styled-components/native';
import {theme} from '../../../theme/globalStyles';

export const Label = styled.Text`
  font-family: ${theme.fontFamily.bold};
  font-style: normal;
  font-weight: 600;
  font-size: ${theme.fontSize.headline};
  color: ${props => (props.color ? props.color : theme.color.dark)};
  text-align: left;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'none'};
`;
