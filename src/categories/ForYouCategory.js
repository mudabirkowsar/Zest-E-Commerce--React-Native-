import { View, Text } from 'react-native'
import React from 'react'
import MainBannerForYou from '../components/MainBannerForYou'
import ProductsMayLove from '../components/ProductsMayLove'
import ForYouVerticalComponent from '../components/ForYouVerticalComponent'
import SaleItemsComponent from '../components/SaleItemsComponent'

export default function ForYouCategory() {
    return (
        <View>
            {/* Auto Banner Slider */}
            <MainBannerForYou />
            <ProductsMayLove />
            <ForYouVerticalComponent/>
            <SaleItemsComponent/>
        </View>
    )
}