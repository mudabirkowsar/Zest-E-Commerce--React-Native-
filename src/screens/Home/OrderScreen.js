import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';

export default function OrderScreen() {
  // Sample orders data
  const [orders] = useState([
    {
      id: 'ORD001',
      date: '2025-08-29',
      total: 49.99,
      status: 'Delivered',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 29.99 },
        { name: 'Phone Case', quantity: 2, price: 10.00 },
      ],
    },
    {
      id: 'ORD002',
      date: '2025-08-27',
      total: 79.50,
      status: 'Shipped',
      items: [
        { name: 'Smartwatch', quantity: 1, price: 79.50 },
      ],
    },
  ]);

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Total: ${item.total.toFixed(2)}</Text>
      <Text>Status: {item.status}</Text>

      <Text style={styles.itemsHeader}>Items:</Text>
      {item.items.map((i, index) => (
        <Text key={index} style={styles.itemText}>
          {i.quantity} x {i.name} - ${i.price.toFixed(2)}
        </Text>
      ))}
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.headerText}>My Orders</Text>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrder}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  orderCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemsHeader: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  itemText: {
    marginLeft: 10,
  },
});
