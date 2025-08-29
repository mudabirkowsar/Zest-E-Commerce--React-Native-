import { View } from 'react-native'
import React from 'react'
import MainBannerForYou from '../components/MainBannerForYou'
import ComponentOneShoes from '../components/ShoesCategory/ComponentOneShoes'
import ComponentTwoShoes from '../components/ShoesCategory/ComponentTwoShoes'
import ComponentThreeShoes from '../components/ShoesCategory/ComponentThreeShoes'
import ComponentFourShoes from '../components/ShoesCategory/ComponentFourShoes'
import ProductsList from '../components/ProductsList'

export default function ShoesCategory() {
    return (
        <View>
            <MainBannerForYou
                imageOne={require('../../assets/shoeBanner1.png')}
                imageTwo={require('../../assets/shoeBanner2.png')}
                imageThree={require('../../assets/shoeBanner3.png')}
                imageFour={require('../../assets/shoeBanner4.png')}
            />

            <ComponentOneShoes />
            <ComponentTwoShoes />
            <ComponentThreeShoes />
            <ComponentFourShoes />
            <ProductsList />
        </View>
    )
}