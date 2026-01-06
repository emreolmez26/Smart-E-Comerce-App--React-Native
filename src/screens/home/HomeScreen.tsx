import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSaveView from '../../components/views/AppSaveView'
import { AppFonts } from '../../styles/fonts'

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <Text style={{ fontFamily: AppFonts.Bold }}>HomeScreen</Text>
    </AppSaveView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})