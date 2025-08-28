import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from "react-native";
import data from "../../data/data.json";
import { getRandomProducts, getRandomProductsByCategory } from "../../utils/getRandomProducts";

const { width } = Dimensions.get("window");

const productsData = getRandomProducts(data, 20)

// Product Card
const ProductCard = ({ product }) => (
  <TouchableOpacity style={styles.card}
    onPress={() => Alert.alert(product.name)}
  >
    <Image source={{ uri: product.image1 }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name} numberOfLines={2}>
        {product.name}
      </Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>
      </View>
      <Text style={styles.discount}>{product.discountPercentage}% OFF</Text>
      <Text style={styles.rating}>⭐ {product.rating}</Text>
    </View>
  </TouchableOpacity>
);

export default function ProductsList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Products</Text>
      <View style={styles.grid}>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 15,
    color: "#111",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: (width / 2) - 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 140,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
    marginBottom: 5,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a73e8",
    marginRight: 5,
  },
  oldPrice: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
  },
  discount: {
    fontSize: 12,
    color: "#e74c3c",
    fontWeight: "600",
    marginBottom: 3,
  },
  rating: {
    fontSize: 12,
    color: "#f39c12",
  },
});
