import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/color";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { IS_Android, IS_IOS } from "../../constants/constants";
import { useNavigation } from "@react-navigation/native";

const CheckoutScreen = () => {
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const navigation = useNavigation<any>();

  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInput
            placeholder="Full Name"
            values={fullName}
            onChangeText={setFullName}
          />
          <AppTextInput
            placeholder="Phone Number"
            values={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <AppTextInput
            placeholder="Detailed Address"
            values={address}
            onChangeText={setAddress}
          />
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <AppButton
          title="Confirm"
          onPress={() => navigation.navigate("MainAppBottomTabs", { screen: "Home" })}
        />
      </View>
    </AppSaveView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_IOS ? vs(15) : undefined,
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    width: "100%",
    bottom: IS_Android ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
});
