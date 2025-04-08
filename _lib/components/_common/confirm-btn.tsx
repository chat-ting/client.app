import { Button, View } from 'react-native';
import { Btn } from './btn';
import { ComponentProps } from 'react';

export function ConfirmBtn({ title, ...props }: ComponentProps<typeof Button>) {
  return (
    <View
      style={{
        width: '100%',
        position: 'absolute',
        bottom: 60,
        left: 20,
      }}>
      <Btn title={title} {...props} />
    </View>
  );
}
