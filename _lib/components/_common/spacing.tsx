import styled from '@emotion/native';
import { memo } from 'react';

type Props = { size: string };

export const Spacing = memo(({ size }: Props) => {
  return <Comp size={size} />;
});

const Comp = styled.View<{ size: string }>`
  margin-top: ${({ size }) => size + 'px'};
`;
