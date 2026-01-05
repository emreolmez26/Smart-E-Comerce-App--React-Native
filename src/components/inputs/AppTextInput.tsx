import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { vs,s } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'

interface AppTextInputProps {
    values: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    style?: object | object[];
}

const AppTextInput = ({ values, onChangeText, placeholder, secureTextEntry, keyboardType, style }: AppTextInputProps) => {
  return (
    <TextInput
       value={values}
       onChangeText={onChangeText}
       placeholder= {placeholder}
       secureTextEntry={secureTextEntry}
       keyboardType={keyboardType}
       style={[styles.input, style]}
    />

  )
}

export default AppTextInput

const styles = StyleSheet.create({
    input: {
        height: vs(40),
        borderColor: AppColors.borderColor,
        borderRadius: s(15),
        borderWidth: 1,
        paddingHorizontal: s(10), // padding Horizantal şu işe yarar: TextInput'in içindeki metin ile kenar arasındaki boşluk
        fontSize: s(16),
        backgroundColor: AppColors.white,
        width: '100%',
        marginBottom: vs(10), // her bir TextInput bileşeni arasına dikey boşluk ekler
    },
})