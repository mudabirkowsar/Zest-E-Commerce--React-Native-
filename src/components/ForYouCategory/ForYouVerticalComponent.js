import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import data from '../../../data/data.json'
import { getRandomProducts } from '../../../utils/getRandomProducts';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const products = getRandomProducts(data, 6);

// const products = [
//   { id: 1, title: "Sony WH-1000XM4", img: require("../../assets/smartphoneSale.jpeg") },
//   { id: 2, title: "Nike Air Max 270", img: require("../../assets/shoes.webp") },
//   { id: 3, title: "Apple Watch Series 8", img: require("../../assets/smartwatchSale.jpeg") },
//   { id: 4, title: "Bose Headphones 700", img: require("../../assets/headphoneSale.jpeg") },
//   { id: 5, title: "Levi's 501 Jeans", img: require("../../assets/tshirt.webp") },
//   { id: 6, title: "Samsung Galaxy S23", img: require("../../assets/headphoneSale.jpeg") },
// ];

export default function ForYouVerticalComponent() {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Recommended for You</Text>

      <View style={styles.grid}>
        <View style={styles.column}>
          {products.slice(0, 2).map((item) => (
            <TouchableOpacity key={item.id} style={styles.verticalCard}
              onPress={() => navigation.navigate("ProductDescriptionScreen", { product: item })}
            >
              <Image source={{ uri: item.image1 }} style={styles.verticalImage} />
              <Text numberOfLines={1} style={styles.verticalText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.column}>
          {products.slice(2).map((item) => (
            <TouchableOpacity key={item.id} style={styles.horizontalCard}
              onPress={() => navigation.navigate("ProductDescriptionScreen", { product: item })}
            >
              <Image source={{ uri: item.image1 }} style={styles.horizontalImage} />
              <Text numberOfLines={1} style={styles.horizontalText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2c3e50",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  verticalCard: {
    height: 170,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
    padding: 15,
  },
  horizontalCard: {
    height: 80,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  verticalImage: {
    width: width / 3.5,
    height: width / 3.5,
    borderRadius: 15,
    marginBottom: 10,
  },
  horizontalImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 15,
  },
  verticalText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#34495e",
    textAlign: "center",
  },
  horizontalText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#34495e",
    flexShrink: 1,
  },
});
