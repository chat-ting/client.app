import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chat } from './chat/_chat';

const Stack = createNativeStackNavigator();
export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Home" component={Chat} />
    </Stack.Navigator>
  );
}
