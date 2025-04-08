import { SafeAreaView, View } from 'react-native';

export function Layout({ ...props }) {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>{props.children}</View>
    </SafeAreaView>
  );
}
