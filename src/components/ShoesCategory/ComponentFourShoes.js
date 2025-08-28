import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import data from '../../../data/data.json';
import { getRandomProductsByCategory } from '../../../utils/getRandomProducts';

const { width } = Dimensions.get("window");
const SMALL_CARD_WIDTH = (width - 60) / 2; // 2 columns with spacing inside the big card

export default function ComponentFourShoes() {
  const shoes = getRandomProductsByCategory(data, 'Shoes', 4); // 4 shoes for the inner cards

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>🔥 Trending Picks</Text>

      {/* Big Card */}
      <View style={styles.bigCard}>
        {shoes.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={[
              styles.smallCard,
              { marginRight: index % 2 === 0 ? 10 : 0, marginBottom: index < 2 ? 10 : 0 },
            ]}
          >
            <Image source={{ uri: item.image1 }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.discount}>{item.discountPercentage}% OFF</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 15,
    color: "#222",
  },
  bigCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    elevation: 4,
  },
  smallCard: {
    width: SMALL_CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  info: {
    padding: 6,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#27ae60",
    marginTop: 2,
  },
  discount: {
    fontSize: 11,
    color: "#ff6600",
    fontWeight: "600",
  },
});
