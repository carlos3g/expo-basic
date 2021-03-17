import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import backgroundIMG from '@assets/images/background.png';

export const Wrapper = styled.ImageBackground.attrs({
  source: backgroundIMG,
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: #f8f8f2;
  font-size: 18px;
  text-align: center;
`;
