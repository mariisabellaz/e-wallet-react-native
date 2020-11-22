import styled from 'styled-components/native';
import {theme} from '../../../theme/globalStyles';

export const Wrapper = styled.View`
  width: 100%;
  background: ${theme.color.ice};
  border-radius: ${theme.metrics.radius};
  margin-bottom: 10px;
  padding: 14px ${theme.metrics.padding};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  flex-direction: column;
  width: 45%;
  margin-left: 25px;
`;

export const Number = styled.View`
  align-self: center;
  right: 0;
  position: absolute;
`;
