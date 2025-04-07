import styled from '@emotion/native';
import { ComponentProps } from 'react';
import { Button } from 'react-native';
import { COLORS } from '../../colors';

const Comp = styled.TouchableOpacity`
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  background-color: ${COLORS.THEME};
  border: 1px transparent;
`;

const Txt = styled.Text`
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

export function Btn({ title, ...props }: ComponentProps<typeof Button>) {
  return (
    <Comp onPress={props.onPress} {...props}>
      <Txt>{title}</Txt>
    </Comp>
  );
}
