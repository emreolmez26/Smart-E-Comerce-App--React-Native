import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React, { FC, ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../styles/color";

interface AppSaveViewProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const AppSaveView: FC<AppSaveViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSaveView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  container: {
    flex: 1,
  },
});
