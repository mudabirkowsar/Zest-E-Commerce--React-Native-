import { View, Text } from 'react-native'
import React from 'react'
import MainBannerForYou from '../components/MainBannerForYou'
import ProductsList from '../components/ProductsList'
import ProductsMayLove from '../components/ForYouCategory/ProductsMayLove'
import ForYouVerticalComponent from '../components/ForYouCategory/ForYouVerticalComponent'
import ForYouLast from '../components/ForYouCategory/ForYouLast'
import SaleItemsComponent from '../components/ForYouCategory/SaleItemsComponent'

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