import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { getRandomProductsByCategory } from '../../../utils/getRandomProducts';
import data from '../../../data/data.json';

export default function ComponentThreeShoes() {
  const item = getRandomProductsByCategory(data, 'Shoes', 1)[0]; // Get the first product from array

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} style={styles.card}
      onPress={() => Alert.alert(item.name)}
      >
        <ImageBackground source={{ uri: item.image1 }} style={styles.image} imageStyle={{ borderRadius: 20 }}>
          {/* Gradient Overlay */}
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.9)']}
            style={styles.gradient}
          >
            {/* Content over Image */}
            <View style={styles.content}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
              
              <View style={styles.priceRow}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.oldPrice}>${item.oldPrice}</Text>
              </View>

              <Text style={styles.discount}>{item.discountPercentage}% OFF</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    height: 320,
    elevation: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#27ae60',
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 14,
    color: '#ccc',
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ff6600',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff6600',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
