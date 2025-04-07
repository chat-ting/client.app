import styled from '@emotion/native';
import { ComponentProps } from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../colors';

type Props = ComponentProps<typeof Text>;

export function PageCaption({ ...props }: Props) {
  return <Comp {...props} />;
}

const Comp = styled.Text`
  color: ${COLORS.CAPTION};
  font-weight: 500;
  font-size: 18;
  line-height: 20;
  margin-bottom: 4.5;
`;
