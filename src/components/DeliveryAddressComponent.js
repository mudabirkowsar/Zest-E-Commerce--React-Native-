import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { MaterialIcons, Feather } from "@expo/vector-icons";

export default function DeliveryAddressComponent() {
  const address = {
    name: "Mudabir Kowsar",
    phone: "+91 9876543210",
    house: "123, Green Park Apartments",
    street: "MG Road, Indiranagar",
    city: "Bangalore",
    state: "Karnataka",
    zip: "560038",
  };

  return (
    <LinearGradient
      colors={['#ffecd2', '#fcb69f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <MaterialIcons name="location-on" size={22} color="#ff7e5f" />
        <Text style={styles.title}>Delivery Address</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{address.name}</Text>
        <Text style={styles.line}>{address.house}, {address.street}</Text>
        <Text style={styles.line}>{address.city}, {address.state} - {address.zip}</Text>
        <Text style={styles.phone}>📞 {address.phone}</Text>
      </View>

      <TouchableOpacity style={styles.changeBtn}>
        <Feather name="edit" size={16} color="#fff" />
        <Text style={styles.changeText}>Change</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2d3436",
    marginLeft: 6,
  },
  details: {
    marginBottom: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  line: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
  phone: {
    fontSize: 13,
    color: "#444",
    marginTop: 6,
  },
  changeBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff7e5f",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  changeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },
});
