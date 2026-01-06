import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'
import EmptyCart from './EmptyCart'
import CartItem from '../../components/cart/CartItem'
import TotalsView from '../../components/cart/TotalsView'
import { FlatList } from 'react-native-gesture-handler'
import { products } from '../../data/products'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <CartItem {...item} imageURL={item.imageURL} /> 
        )}
        ListEmptyComponent={<EmptyCart />}
        contentContainerStyle={{paddingHorizontal: 10, paddingTop: 10}}
        
      />
      <TotalsView itemsPrice={1000} orderTotal={1200} />
      <AppButton title='Proceed to Checkout' style={{margin: 10}} onPress={() => navigation.navigate('CheckoutScreen')} />
    </AppSaveView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})