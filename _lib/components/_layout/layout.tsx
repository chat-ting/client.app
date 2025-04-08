import { SafeAreaView, useWindowDimensions, View } from 'react-native';

export function Layout({ ...props }) {
  const { height: vh, width: _ } = useWindowDimensions();
  return (
    <SafeAreaView style={{ minHeight: vh }}>
      <View style={{ padding: 12 }}>{props.children}</View>
    </SafeAreaView>
  );
}
