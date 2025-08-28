import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { getRandomProducts } from '../../utils/getRandomProducts';
import data from '../../data/data.json'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const saleItems = getRandomProducts(data, 3)

// const saleItems = [
//   { id: 1, name: "Smartphone Pro", price: "$699", oldPrice: "$899", img: require("../../assets/smartphoneSale.jpeg") },
//   { id: 2, name: "Wireless Headphones", price: "$99", oldPrice: "$149", img: require("../../assets/headphoneSale.jpeg") },
//   { id: 3, name: "Smartwatch", price: "$159", oldPrice: "$229", img: require("../../assets/smartwatchSale.jpeg") },
// ];

export default function SaleItemsComponent() {
  const navigation = useNavigation()
  return (
    <LinearGradient
      colors={["#fff5f0", "#ffe1c6"]}
      style={styles.bigCard}
    >
      {/* Floating Sale Badge */}
      <View style={styles.saleBadge}>
        <Text style={styles.saleBadgeText}>🔥 MEGA SALE</Text>
      </View>

      <View style={styles.contentRow}>
        {/* Left: Featured Big Card */}
        <TouchableOpacity style={styles.featuredCard}
          onPress={() => navigation.navigate("ProductDescriptionScreen", { product: saleItems[0] })}
        >
          <Image source={{ uri: saleItems[0].image1 }} style={styles.featuredImage} />
          <View style={styles.overlay}>
            <Text style={styles.featuredName} numberOfLines={1}>
              {saleItems[0].name}
            </Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{saleItems[0].price}</Text>
              <Text style={styles.oldPrice}>{saleItems[0].oldPrice}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Right: Two Small Stacked Cards */}
        <View style={styles.rightColumn}>
          {saleItems.slice(1).map((item) => (
            <TouchableOpacity key={item.id} style={styles.smallCard}
              onPress={() => navigation.navigate("ProductDescriptionScreen", { product: item })}
            >
              <Image source={{ uri: item.image1 }} style={styles.smallImage} />
              <View style={styles.overlaySmall}>
                <Text style={styles.smallName} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bigCard: {
    marginTop: 25,
    marginHorizontal: 15,
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    position: "relative",
    paddingVertical: 25,
  },
  saleBadge: {
    position: "absolute",
    top: -15,
    left: 20,
    backgroundColor: "#ff2e63",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 25,
    elevation: 3,
  },
  saleBadgeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featuredCard: {
    width: width * 0.45,
    height: 180,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  featuredName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: "800",
    color: "#ffcc00",
    marginRight: 6,
  },
  oldPrice: {
    fontSize: 12,
    color: "#ddd",
    textDecorationLine: "line-through",
  },
  rightColumn: {
    width: width * 0.35,
    justifyContent: "space-between",
  },
  smallCard: {
    height: 85,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  smallImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlaySmall: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  smallName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
});
