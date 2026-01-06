import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/color'
import { vs } from 'react-native-size-matters'
import { IMAGES } from '../../constants/images-path'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.logo } style={styles.logo} />
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:vs(10),
    },
    logo: {
        width: vs(40),
        height: vs(40),
        tintColor: AppColors.white,
    },
})