import styled from '@emotion/native';
import { ComponentProps } from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../colors';

const Comp = styled.Text`
  color: ${COLORS.TEXT};
  font-weight: 400;
  font-size: 16;
  line-height: 28.8;
  margin-bottom: 14.4;
`;

export function LongTxt({ ...props }: ComponentProps<typeof Text>) {
  return <Comp {...props} />;
}
