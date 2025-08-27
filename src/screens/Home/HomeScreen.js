import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ForYouCategory from '../../categories/ForYouCategory';
import ElectronicsCategory from '../../categories/ElectronicsCategory';


// Category data with icons
const categories = [
  { name: 'For You', icon: 'home-outline', color: '#ef4444' },
  { name: "Electronics", icon: "phone-portrait-outline", color: "#007bff" },
  { name: "Clothes", icon: "shirt-outline", color: "#ff6600" },
  { name: "Shoes", icon: "footsteps-outline", color: "#10b981" },
  { name: "Watches", icon: "time-outline", color: "#f59e0b" },
  { name: "Appliances", icon: "tv-outline", color: "#8b5cf6" },
  { name: 'Furniture', icon: 'home-outline', color: '#a855f7' },
  { name: 'Sports', icon: 'football-outline', color: '#ef4444' },
];


export default function HomeScreen() {

  const [category, setCategory] = useState("For You")

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="" size={28} color="#333" />
        </TouchableOpacity>
        <View style={styles.locationBox}>
          <Icon name="location-outline" size={18} color="#ff6600" />
          <Text style={styles.locationText}>Srinagar, IN</Text>
        </View>
        <TouchableOpacity>
          <Icon name="cart-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Welcome */}
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={styles.welcome}>
            Hello <Text style={styles.username}>Mudabir 👋</Text>
          </Text>
          <Text style={styles.tagline}>Find your daily essentials here</Text>
        </View>

        {/* Search Input */}
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <View style={styles.searchBox}>
            <Icon name="search-outline" size={22} color="#ff6600" style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Search products, brands..."
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
            <TouchableOpacity>
              <Icon name="mic-outline" size={22} color="#ff6600" />
            </TouchableOpacity>
          </View>
        </View>


        {/* Categories */}
        <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
          <Text style={styles.categoryTitle}>Shop by Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat, i) => (
              <TouchableOpacity
                onPress={() => setCategory(cat.name)}
                key={i} style={styles.indCat}>
                <View style={[styles.catCircle, { backgroundColor: `${cat.color}15` },
                category === cat.name && {
                  backgroundColor: "#fabdd6",
                  fontWeight: '700',
                },]}>
                  <Icon name={cat.icon} size={26} color={cat.color} />
                </View>
                <Text
                  style={[
                    styles.catText,
                    category === cat.name && {
                      textDecorationLine: 'underline',
                      textDecorationColor: '#ff6600',
                      textDecorationStyle: 'solid',
                      fontWeight: '700',
                    },
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {category === "For You" && <ForYouCategory />}
        {category === "Electronics" && <ElectronicsCategory />}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'white',
    flex: 1,
    paddingBottom:30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff3e6",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  locationText: {
    fontSize: 14,
    color: "#ff6600",
    marginLeft: 5,
    fontWeight: "500",
  },
  welcome: {
    fontSize: 28,
    fontWeight: "600",
    color: "#111",
  },
  username: {
    color: "#ff6600",
    fontWeight: "700",
  },
  tagline: {
    fontSize: 16,
    color: "gray",
    marginTop: 4,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    // Elevation for Android
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#111",
  },
  indCat: {
    alignItems: "center",
    marginRight: 10,
    width: 65,
  },
  catCircle: {
    height: 40,
    width: 40,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  catText: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 5,
    color: "#444",
  },
});
