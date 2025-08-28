import { View, Text } from 'react-native'
import React from 'react'
import MainBannerForYou from '../components/MainBannerForYou'

export default function ClothesCategory() {
    return (
        <View>
            <MainBannerForYou
                imageOne={require('../../assets/clothesBanner1.png')}
                imageTwo={require('../../assets/clothesBanner2.png')}
                imageThree={require('../../assets/clothesBanner3.png')}
                imageFour={require('../../assets/clothesBanner4.png')}
            />
        </View>
    )
}