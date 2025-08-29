import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React from 'react';
import { getRandomProductsByCategory } from '../../../utils/getRandomProducts';
import data from '../../../data/data.json'
import { useNavigation } from '@react-navigation/native';

const trendingShoes = getRandomProductsByCategory(data, 'Shoes', 4);

export default function ComponentTwoShoes() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔥 Trending in Shoes</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {trendingShoes.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate("ProductDescriptionScreen", { product: item })}
          >
            {/* item Image */}
            <Image source={{ uri: item.image1 }} style={styles.image} />

            {/* item Info */}
            <View style={styles.info}>
              <Text numberOfLines={1} style={styles.name}>
                {item.name} <Text style={styles.brand}>({item.brand})</Text>
              </Text>

              {/* Rating */}
              <View style={styles.ratingRow}>
                <Text>⭐</Text>
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>

              {/* Price with discount */}
              <View style={styles.priceRow}>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                {item.oldPrice && (
                  <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
                )}
              </View>

              <Text style={styles.discount}>{item.discountPercentage}% OFF</Text>

              {/* Buttons Row */}
              <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.trendButton}>
                  <Text style={styles.trendButtonText}>View Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cartButton}>
                  <Text style={styles.cartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
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
    padding: 15,
    backgroundColor: '#f4f6f8',
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 15,
    color: '#2c3e50',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 15,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#34495e',
  },
  brand: {
    fontSize: 12,
    color: '#888',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    color: '#444',
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
    fontSize: 13,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 12,
    color: '#ff6600',
    fontWeight: '700',
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  trendButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  trendButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
  cartButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
});
