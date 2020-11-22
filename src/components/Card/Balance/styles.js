import styled from 'styled-components/native';
import {theme} from '../../../theme/globalStyles';

export const Wrapper = styled.View`
  width: 100%;
  display: flex;
  background: ${theme.color.ice};
  border-radius: ${theme.metrics.radius};
  margin-bottom: 35px;
  padding: 14px ${theme.metrics.padding};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const Money = styled.View`
  flex-direction: row;
`;
