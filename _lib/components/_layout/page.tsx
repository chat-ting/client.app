import { ComponentProps } from 'react';
import { View } from 'react-native';
import { Title } from '../_common/title';
import { Spacing } from '../_common/spacing';
import { SubTitle } from '../_common/subtitle';
import { PageCaption } from '../_common/page-caption';
import { Txt } from '../_common/txt';
import { Layout } from './layout';

type Props = {
  title: string;
  subtitle?: string;
  caption?: string;
  index?: string[];
} & ComponentProps<typeof View>;

export function Page({ title, subtitle, caption, index, ...props }: Props) {
  return (
    <Layout>
      {index ? <Txt>index</Txt> : <Txt>idx</Txt>}
      <Spacing size="8" />
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {caption && <PageCaption>{caption}</PageCaption>}
      {props.children}
    </Layout>
  );
}
