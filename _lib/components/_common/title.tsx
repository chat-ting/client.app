import styled from '@emotion/native';
import { ComponentProps } from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../colors';

type Props = ComponentProps<typeof Text>;

export function Title({ ...props }: Props) {
  return <Comp {...props} />;
}

const Comp = styled.Text`
  color: ${COLORS.TEXT};
  font-weight: 500;
  font-size: 24;
  line-height: 28;
  margin-bottom: 16;
`;
