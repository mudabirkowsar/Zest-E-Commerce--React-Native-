import { View } from 'react-native'
import React from 'react'
import MainBannerForYou from '../components/MainBannerForYou'
import ComponentOneClothes from '../components/ClothesComponents/ComponentOneClothes'
import ComponentTwoClothes from '../components/ClothesComponents/ComponentTwoClothes'
import ClothesThreeComponent from '../components/ClothesComponents/ClothesThreeComponent'
import ComponentFourClothes from '../components/ClothesComponents/ComponentFourClothes'
import ProductsList from '../components/ProductsList'

export default function ClothesCategory() {
    return (
        <View>
            <MainBannerForYou
                imageOne={require('../../assets/clothesBanner1.png')}
                imageTwo={require('../../assets/clothesBanner2.png')}
                imageThree={require('../../assets/clothesBanner3.png')}
                imageFour={require('../../assets/clothesBanner4.png')}
            />
            <ComponentOneClothes />
            <ComponentTwoClothes />
            <ComponentFourClothes />
            <ClothesThreeComponent />
            <ProductsList />
        </View>
    )
}