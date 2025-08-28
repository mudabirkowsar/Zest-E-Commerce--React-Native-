import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import React from "react";
import data from '../../../data/data.json'
import { getRandomProductsByCategory } from "../../../utils/getRandomProducts";

const { width } = Dimensions.get("window");

const sampleData = getRandomProductsByCategory(data, 'Electronics', 4);

// const sampleData = [
//   { id: 1, title: "Wireless Headphones", price: "$120", image: "https://images.pexels.com/photos/3394655/pexels-photo-3394655.jpeg" },
//   { id: 2, title: "Smart Watch", price: "$200", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },
//   { id: 3, title: "Sneakers", price: "$80", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
//   { id: 4, title: "Gaming Controller", price: "$99", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
// ];

export default function ComponentTwoElectric() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bigCard}>
        <Text style={styles.bigTitle}>🔥 Today's Picks</Text>

        <View style={styles.innerGrid}>
          {sampleData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.smallCard}>
              <Image source={{ uri: item.image1 }} style={styles.image} />
              <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  bigCard: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  bigTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 15,
    color: "#2c3e50",
  },
  innerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  smallCard: {
    width: (width / 2) - 50,
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34495e",
    textAlign: "center",
  },
  price: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1abc9c",
    marginTop: 4,
  },
});
