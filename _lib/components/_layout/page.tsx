import { ComponentProps } from 'react';
import { SafeAreaView, useWindowDimensions, View } from 'react-native';
import { Title } from '../_common/title';
import { Spacing } from '../_common/spacing';
import { SubTitle } from '../_common/subtitle';
import { PageCaption } from '../_common/page-caption';
import { Txt } from '../_common/txt';

type Props = {
  title: string;
  subtitle?: string;
  caption?: string;
  index?: string[];
} & ComponentProps<typeof View>;

export function Page({ title, subtitle, caption, index, ...props }: Props) {
  const { height: vh, width: _ } = useWindowDimensions();
  return (
    <SafeAreaView style={{ minHeight: vh }}>
      <Spacing size="16" />
      {index ? <Txt>index</Txt> : <Txt>idx</Txt>}
      <Spacing size="8" />
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {caption && <PageCaption>{caption}</PageCaption>}
      {props.children}
    </SafeAreaView>
  );
}
