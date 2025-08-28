import { View } from 'react-native';
import React from 'react';
import MainBannerForYou from '../components/MainBannerForYou';
import ComponentOneElectric from '../components/ElectricComponents/ComponentOneElectric';
import ComponentTwoElectric from '../components/ElectricComponents/ComponentTwoElectric';
import ComponentThreeElectric from '../components/ElectricComponents/ComponentThreeElectric';
import ComponentFourElectric from '../components/ElectricComponents/ComponentFourElectric';
import ProductsList from '../components/ProductsList';

export default function ElectronicsCategory() {
  return (
    <View>
      <MainBannerForYou
        imageOne={require('../../assets/electricBanner1.png')}
        imageTwo={require('../../assets/electricBanner2.png')}
        imageThree={require('../../assets/electricBanner3.png')}
        imageFour={require('../../assets/electricBanner4.png')}
      />

      <ComponentOneElectric />
      <ComponentTwoElectric />
      <ComponentThreeElectric />
      <ComponentFourElectric />
      <ProductsList />
    </View>
  )
}
