import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import data from "../../data/data.json";
import { getRandomProducts } from '../../utils/getRandomProducts';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const products = getRandomProducts(data, 6)

// const products = [
//   { id: 1, title: "Sony WH-1000XM4", price: "$349", discount: "15% OFF", img: require("../../assets/smartphoneSale.jpeg") },
//   { id: 2, title: "Nike Air Max 270", price: "$199", discount: "10% OFF", img: require("../../assets/shoes.webp") },
//   { id: 3, title: "Apple Watch Series 8", price: "$399", discount: "12% OFF", img: require("../../assets/smartwatchSale.jpeg") },
//   { id: 4, title: "Bose Headphones 700", price: "$299", discount: "20% OFF", img: require("../../assets/headphoneSale.jpeg") },
//   { id: 5, title: "Levi's 501 Jeans", price: "$89", discount: "25% OFF", img: require("../../assets/tshirt.webp") },
//   { id: 6, title: "Samsung Galaxy S23", price: "$999", discount: "5% OFF", img: require("../../assets/headphoneSale.jpeg") },
// ];

export default function ForYouLast() {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.grid}>
        {products.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}
          onPress={()=> navigation.navigate("ProductDescriptionScreen", {product:item})}
          >
            <Image source={{ uri: item.image1 }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.discount}>${item.oldPrice}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width / 2) - 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },
  image: {
    width: "100%",
    height: 150,
  },
  overlay: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  info: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1abc9c",
  },
  discount: {
    fontSize: 12,
    fontWeight: "600",
    color: "#e74c3c",
  },
});
