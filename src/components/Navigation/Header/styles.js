import styled from 'styled-components/native';
import {theme} from '../../../theme/globalStyles';

export const SafeAreaView = styled.SafeAreaView`
  width: 100%;
`;

export const Wrapper = styled.View`
  padding: 0 ${theme.defaultPadding};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatusBar = styled.StatusBar`
  background-color: ${theme.color.white};
`;
