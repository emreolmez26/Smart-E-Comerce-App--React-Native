import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSaveView from '../../components/views/AppSaveView'
import { AppFonts } from '../../styles/fonts'
import ProductCard from '../../components/cards/ProductCard'
import { FlatList } from 'react-native-gesture-handler'
import {products} from "../../data/products"

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard title={item.title} price={item.price} imageURL={item.imageURL} onPress={() => {}} />
        )}
        columnWrapperStyle={{justifyContent: "space-between", marginBottom: 10}}
        contentContainerStyle={{paddingHorizontal: 10}}
      />
    </AppSaveView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})