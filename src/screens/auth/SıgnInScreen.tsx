import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import { s } from 'react-native-size-matters'
import { IMAGES } from '../../constants/images-path'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppText from '../../components/texts/AppText'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'

const SıgnInScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const  navigation  =  useNavigation ();
  return (
    <AppSaveView style={styles.container}>
        <Image source={IMAGES.logo} style={styles.logo} />
      <AppTextInput placeholder='Email' onChangeText={setEmail}/>
      <AppTextInput placeholder='Password' secureTextEntry onChangeText={setPassword}/>
      <AppText style={styles.appName}>
        Smart E-Commerce App
      </AppText>
      <AppButton title='Sign In' onPress={() => navigation.navigate('MainAppBottomTabs')} />
      <AppButton title='Sign Up' backgroundColor='lightgray' textColor='black' onPress={() => navigation.navigate('SignUp')} style={{marginTop: s(10)}} />  
    </AppSaveView>
  )
}

export default SıgnInScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: s(12),
    },
    logo: {
        width: s(150),
        height: s(150),
        marginBottom: s(20),
    },
    appName: {
        fontSize: s(16),
        marginTop: s(10),
        marginBottom: s(20),
    },
})