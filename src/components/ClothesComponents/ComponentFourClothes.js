import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import data from '../../../data/data.json';
import { getRandomProductsByCategory } from '../../../utils/getRandomProducts';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.44; // Two columns with spacing
const products = getRandomProductsByCategory(data, 'Clothes', 6);

export default function ComponentFourClothes() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔥 Hot Deals</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.masonry}>
          {products.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.card,
                { height: index % 2 === 0 ? 280 : 220 }, // stagger effect
              ]}
              onPress={() => navigation.navigate("ProductDescriptionScreen", { product: item })}
            >
              {/* item Image with Gradient Overlay */}
              <ImageBackground
                source={{ uri: item.image1 }}
                style={styles.imageBackground}
                imageStyle={{ borderRadius: 18 }}
              >
                <LinearGradient
                  colors={['rgba(0,0,0,0.6)', 'transparent']}
                  style={styles.gradient}
                >
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.discountPercentage}% OFF</Text>
                  </View>
                  <View style={styles.infoOverlay}>
                    <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                    <View style={styles.priceRow}>
                      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                      {item.oldPrice && (
                        <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
                      )}
                    </View>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 15,
    color: '#2c3e50',
  },
  masonry: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    borderRadius: 18,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 6,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    borderRadius: 18,
    padding: 10,
  },
  badge: {
    backgroundColor: '#ff6600',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  infoOverlay: {
    marginTop: 'auto',
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: '800',
    color: '#27ae60',
    marginRight: 6,
  },
  oldPrice: {
    fontSize: 12,
    color: '#ddd',
    textDecorationLine: 'line-through',
  },
});
