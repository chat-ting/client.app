import styled from '@emotion/native';
import { ComponentProps } from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../colors';

const Comp = styled.Text`
  color: ${COLORS.TEXT};
  font-weight: 400;
  font-size: 16;
`;

export function Txt({ ...props }: ComponentProps<typeof Text>) {
  return <Comp {...props} />;
}
