import styled from '@emotion/native';
import { ComponentProps } from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../colors';

type Props = ComponentProps<typeof Text>;

export function SubTitle({ ...props }: Props) {
  return <Comp {...props} />;
}

const Comp = styled.Text`
  color: ${COLORS.TEXT};
  font-weight: 500;
  font-size: 20;
  line-height: 24;
  margin-bottom: 10;
`;
