import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import data from '../../../data/data.json';
import LinearGradient from 'react-native-linear-gradient';
import { getRandomProducts, getRandomProductsByCategory } from '../../../utils/getRandomProducts';

const { width } = Dimensions.get("window");
const products = getRandomProductsByCategory(data,'Clothes', 5);

export default function ComponentOneClothes() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Recommended for You</Text>

      {/* Big Card with LinearGradient */}
      <LinearGradient colors={["#a1c4fd", "#c2e9fb"]} style={styles.bigCard}>
        <View style={styles.grid}>
          <View style={styles.column}>
            {products.slice(0, 2).map((product) => (
              <TouchableOpacity 
                key={product.id} 
                style={styles.verticalCard}
                onPress={() => Alert.alert(product.name)}
              >
                <Image source={{ uri: product.image1 }} style={styles.verticalImage} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{product.discountPercentage}% OFF</Text>
                </View>
                <Text numberOfLines={1} style={styles.verticalText}>{product.name}</Text>
                <Text style={styles.verticalPrice}>${product.price.toFixed(2)}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.column}>
            {products.slice(2).map((product, index) => (
              <TouchableOpacity 
                key={product.id} 
                style={[styles.horizontalCard, { transform: [{ rotate: index % 2 === 0 ? "-1.5deg" : "1.5deg" }] }]}
                onPress={() => Alert.alert(product.name)}
              >
                <Image source={{ uri: product.image1 }} style={styles.horizontalImage} />
                <View style={styles.badgeSmall}>
                  <Text style={styles.badgeTextSmall}>{product.discountPercentage}% OFF</Text>
                </View>
                <View style={styles.horizontalTextContainer}>
                  <Text numberOfLines={1} style={styles.horizontalText}>{product.name}</Text>
                  <Text style={styles.horizontalPrice}>${product.price.toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6fc",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2c3e50",
    marginBottom: 20,
  },
  bigCard: {
    borderRadius: 25,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
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
    height: 180,
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
    overflow: "hidden",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  verticalImage: {
    width: width / 3.5,
    height: width / 3.5,
    borderRadius: 20,
    marginBottom: 10,
  },
  verticalText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#34495e",
    textAlign: "center",
  },
  verticalPrice: {
    fontSize: 16,
    fontWeight: "800",
    color: "#27ae60",
    marginTop: 5,
  },
  horizontalCard: {
    height: 100,
    borderRadius: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  horizontalImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  horizontalTextContainer: {
    marginLeft: 12,
    flex: 1,
    justifyContent: "center",
  },
  horizontalText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#34495e",
  },
  horizontalPrice: {
    fontSize: 14,
    fontWeight: "800",
    color: "#27ae60",
    marginTop: 3,
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#e74c3c",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  badgeSmall: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#e67e22",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeTextSmall: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 10,
  },
});
