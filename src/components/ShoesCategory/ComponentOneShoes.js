import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { getRandomProductsByCategory } from '../../../utils/getRandomProducts';
import data from '../../../data/data.json'
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');
const products = getRandomProductsByCategory(data, 'Shoes', 5)

export default function ComponentOneShoes() {
  const navigation = useNavigation()
  // Example demo products
//   const products = [
//     {
//       id: 1,
//       name: "Nike Air Zoom",
//       price: 89.99,
//       oldPrice: 129.99,
//       discount: 30,
//       image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 2,
//       name: "Adidas UltraBoost",
//       price: 109.99,
//       oldPrice: 159.99,
//       discount: 25,
//       image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
//     },
//   ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>👟 Mega Shoe Sale</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate("ProductDescriptionScreen", { product: item })}
          >
            <ImageBackground
              source={{ uri: item.image1 }}
              style={styles.image}
              imageStyle={{ borderRadius: 18 }}
            >
              <LinearGradient
                colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)', 'transparent']}
                style={styles.gradient}
              >
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.discountPercentage}% OFF</Text>
                </View>
              </LinearGradient>
            </ImageBackground>

            <View style={styles.info}>
              <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ff6600',
    marginLeft: 15,
    marginBottom: 15,
  },
  card: {
    width: width * 0.65,
    marginHorizontal: 10,
    borderRadius: 18,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 6,
    marginBottom:20,
  },
  image: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    padding: 10,
  },
  badge: {
    backgroundColor: '#ff6600',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#27ae60',
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
  },
});
