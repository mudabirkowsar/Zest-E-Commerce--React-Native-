import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import data from '../../../data/data.json'
import { getRandomProductsByCategory } from "../../../utils/getRandomProducts";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const products = getRandomProductsByCategory(data, 'Electronics', 4);

// const products = [
//   { id: 1, name: "Smartphone", price: "$499", discount: "10% OFF", img: require("../../../assets/productOne.jpg") },
//   { id: 2, name: "Shoes", price: "$120", discount: "15% OFF", img: require("../../../assets/productTwo.jpg") },
//   { id: 3, name: "Watch", price: "$250", discount: "20% OFF", img: require("../../../assets/productThree.jpg") },
//   { id: 4, name: "Headphones", price: "$89", discount: "5% OFF", img: require("../../../assets/clothes.jpg") },
//   { id: 5, name: "Backpack", price: "$65", discount: "12% OFF", img: require("../../../assets/productOne.jpg") },
// ];

export default function ComponentOneElectric() {
  const navigation = useNavigation()
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, paddingHorizontal: 20, paddingVertical: 20, }}>
        {products.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}
          onPress={()=> navigation.navigate("ProductDescriptionScreen", { product: item })}
          >
            {/* Image with gradient overlay */}
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.image1 }} style={styles.image} />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.5)']}
                style={styles.imageOverlay}
              />
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{item.discountPercentage} %OFF</Text>
              </View>
              <Text style={styles.priceOverlay}>${item.price}</Text>
            </View>

            {/* Product name */}
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartText}>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.4,
    marginRight: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    paddingBottom: 10,
  },
  imageWrapper: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
  },
  discountBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ff6600",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 2,
  },
  discountText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  priceOverlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    zIndex: 2,
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    paddingHorizontal: 10,
  },
  cartButton: {
    marginTop: 8,
    backgroundColor: "#ff6600",
    paddingVertical: 6,
    marginHorizontal: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  cartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
});
