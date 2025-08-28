import { View, Text } from 'react-native'
import React from 'react'
import MainBannerForYou from '../components/MainBannerForYou'
import ProductsMayLove from '../components/ProductsMayLove'
import ForYouVerticalComponent from '../components/ForYouVerticalComponent'
import SaleItemsComponent from '../components/SaleItemsComponent'
import ForYouLast from '../components/ForYouLast'
import ProductsList from '../components/ProductsList'

export default function ForYouCategory() {
    return (
        <View>
            {/* Auto Banner Slider */}
            <MainBannerForYou
                imageOne={require('../../assets/banner1.png')}
                imageTwo={require('../../assets/banner2.png')}
                imageThree={require('../../assets/banner3.png')}
                imageFour={require('../../assets/banner4.png')}
            />
            <ProductsMayLove />
            <ForYouVerticalComponent />
            <ForYouLast />
            <SaleItemsComponent />
            <ProductsList />
        </View>
    )
}