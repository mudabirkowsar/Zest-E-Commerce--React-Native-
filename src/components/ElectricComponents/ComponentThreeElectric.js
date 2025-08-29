import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Alert } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import data from '../../../data/data.json'
import { getRandomProductsByCategory } from "../../../utils/getRandomProducts";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const sampleData = getRandomProductsByCategory(data, 'Electronics', 4);

// const sampleData = [
//   { id: 1, title: "Noise Cancelling Headphones", price: "$149", oldPrice: "$199", discount: "20% OFF", image: "https://images.pexels.com/photos/3394655/pexels-photo-3394655.jpeg" },
//   { id: 2, title: "Smart Fitness Watch", price: "$249", oldPrice: "$299", discount: "15% OFF", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },
//   { id: 3, title: "Stylish Sneakers", price: "$99", oldPrice: "$140", discount: "30% OFF", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
//   { id: 4, title: "Gaming Controller", price: "$79", oldPrice: "$90", discount: "10% OFF", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
// ];

export default function ComponentThreeElectric() {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={["#a18cd1", "#fbc2eb"]}
        style={styles.bigCard}
      >
        <Text style={styles.bigTitle}>⚡ Hot Deals for You</Text>

        <View style={styles.innerGrid}>
          {sampleData.map((item, index) => (
            <TouchableOpacity key={item.id} style={styles.smallCard}
            onPress={()=> navigation.navigate("ProductDescriptionScreen", { product: item })}
            >
              <LinearGradient
                colors={index % 2 === 0 ? ["#fad0c4", "#ff9a9e"] : ["#a1c4fd", "#c2e9fb"]}
                style={styles.gradientCard}
              >
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: item.image1 }} style={styles.image} />
                  <View style={styles.ribbon}>
                    <Text style={styles.ribbonText}>{item.discountPercentage} %OFF</Text>
                  </View>
                </View>
                <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>${item.price}</Text>
                  <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  bigCard: {
    borderRadius: 25,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  bigTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 20,
    color: "#fff",
  },
  innerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  smallCard: {
    width: (width / 2) - 50,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 4,
  },
  gradientCard: {
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },
  ribbon: {
    position: "absolute",
    top: 10,
    left: -35,
    backgroundColor: "#e74c3c",
    paddingVertical: 4,
    paddingHorizontal: 40,
    transform: [{ rotate: "-45deg" }],
  },
  ribbonText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2c3e50",
    textAlign: "center",
    marginTop: 5,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#27ae60",
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 13,
    color: "#888",
    textDecorationLine: "line-through",
  },
});
