import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import data from '../../data/data.json'
import { getRandomProducts } from '../../utils/getRandomProducts';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const products = getRandomProducts(data, 6)

// Example product data
// const products = [
//   { id: 1, name: "Smartphone", price: "$499", discount: "10% OFF", img: require("../../assets/productOne.jpg") },
//   { id: 2, name: "Shoes", price: "$120", discount: "15% OFF", img: require("../../assets/productTwo.jpg") },
//   { id: 3, name: "Watch", price: "$250", discount: "20% OFF", img: require("../../assets/productThree.jpg") },
//   { id: 4, name: "Headphones", price: "$89", discount: "5% OFF", img: require("../../assets/clothes.jpg") },
//   { id: 5, name: "Backpack", price: "$65", discount: "12% OFF", img: require("../../assets/productOne.jpg") },
// ];



export default function ProductsMayLove() {
  const navigation = useNavigation()
  return (
    <LinearGradient colors={['#fff0e5', '#fdd7b0']} style={styles.container}>
      <Text style={styles.title}>Products You May Love</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        {products.map((item) => (
          <TouchableOpacity key={item.id} style={styles.productCard}
            onPress={() => navigation.navigate("ProductDescriptionScreen", { product: item })}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image1 }} style={styles.productImg} />
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{item.discountPercentage} %OFF</Text>
              </View>
            </View>
            <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
  },
  productCard: {
    width: width * 0.32, // decreased width
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 100, // adjusted height
    borderRadius: 12,
    overflow: "hidden",
  },
  productImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  discountBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#10b981",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  discountText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "700",
  },
  productName: {
    fontSize: 14,
    marginTop: 6,
    fontWeight: "600",
    color: "#111",
  },
  productPrice: {
    fontSize: 14,
    color: "#ff6600",
    fontWeight: "700",
    marginTop: 2,
  },
});
