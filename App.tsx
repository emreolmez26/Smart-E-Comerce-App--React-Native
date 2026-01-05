import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/views/AppSaveView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AppButton from "./src/components/buttons/AppButton";
import AppTextInput from "./src/components/inputs/AppTextInput";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SıgnInScreen from "./src/screens/auth/SıgnInScreen";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import AuthStack from "./src/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppSaveView style={styles.container}>
          <FlashMessage position="top" />
          <MainAppStack />
        </AppSaveView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
