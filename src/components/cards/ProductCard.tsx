import { Image, StyleSheet, Text, Touchable, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'
import AppText from '../texts/AppText'
import { AppFonts } from '../../styles/fonts'
import {Ionicons} from "@expo/vector-icons"


interface ProductCardProps {
    title: string;
    price: number;
    imageURL: string;
    onPress: () => void;
}

const ProductCard = ({title, price, imageURL, onPress}: ProductCardProps) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.addToCartButton} onPress={onPress}>
        <Ionicons name="cart-outline" size={s(16)} color={AppColors.white} />
      </TouchableOpacity>

    {/* Image UI */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageURL}}/>
      </View>

    {/* Details */}
        <View style={styles.detailsContainer}>
            <AppText style={styles.titleText}>{title}</AppText>
            <AppText style={styles.priceText}>{price} $</AppText>
        </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width: s(160),
        height: vs(190),
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        shadowColor: AppColors.primary,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: s(10),
    },
    imageContainer:{
        overflow: "hidden",
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
        height: vs(130),
        width:"100%"
    },
    image:{
       height:"100%",
       width:"100%",
       resizeMode:"contain" 
    },
    detailsContainer:{
        flex:1,
        paddingTop: s(8),
        paddingBottom: vs(15),
        paddingHorizontal: s(10)
    },
    titleText:{
        fontSize: s(14),
        fontFamily: AppFonts.Medium,
        color: AppColors.primary
    },
    priceText:{
        fontSize: s(14),
        fontFamily: AppFonts.Bold,
        color: AppColors.primary,
        marginTop: vs(7)
    },
    addToCartButton:{
        width: s(30),
        height: s(30),
        borderRadius: s(15),
        position: "absolute",
        top: 5,
        left: 5,
        backgroundColor: AppColors.primary,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})