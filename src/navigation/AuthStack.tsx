import { createStackNavigator } from "@react-navigation/stack";
import SıgnInScreen from "../screens/auth/SıgnInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SıgnInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}