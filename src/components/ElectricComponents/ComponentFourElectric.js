import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Alert } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import data from '../../../data/data.json'
import { getRandomProductsByCategory } from "../../../utils/getRandomProducts";

const { width } = Dimensions.get("window");

const products = getRandomProductsByCategory(data, 'Electronics', 4);

// const products = [
//   { id: 1, title: "Bluetooth Speaker", price: "$89", oldPrice: "$120", discount: "10% OFF", image: "https://images.pexels.com/photos/3394655/pexels-photo-3394655.jpeg" },
//   { id: 2, title: "VR Headset", price: "$299", oldPrice: "$350", discount: "20% OFF", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },
//   { id: 3, title: "Smart Lamp", price: "$49", oldPrice: "$70", discount: "15% OFF", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
//   { id: 4, title: "Wireless Mouse", price: "$35", oldPrice: "$50", discount: "5% OFF", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
// ];

export default function ComponentFourElectric() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🌟 Top Picks for You</Text>
      {products.map((item, index) => (
        <TouchableOpacity key={item.id} style={[styles.card, { marginTop: index === 0 ? 0 : -30 }]}
        onPress={()=> Alert.alert(item.name)}
        >
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.image1 }} style={styles.image} />
            <LinearGradient
              colors={["rgba(0,0,0,0.5)", "transparent"]}
              style={styles.imageOverlay}
            />
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{item.discountPercentage} %OFF</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#34495e",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
    marginBottom: 40,
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  discountBadge: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#e74c3c",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  discountText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  info: {
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#27ae60",
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 13,
    color: "#888",
    textDecorationLine: "line-through",
  },
});
