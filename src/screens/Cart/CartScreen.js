import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

export default function CartScreen() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Sony WH-1000XM4 Headphones',
      price: 349.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg',
    },
    {
      id: '2',
      name: 'Zara Linen Blend Shirt',
      price: 39.99,
      quantity: 2,
      image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg',
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', onPress: () => setCartItems(prev => prev.filter(item => item.id !== id)) },
      ]
    );
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.qtyRow}>
          <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.qtyBtn}>
            <TouchableOpacity onPress={() => decreaseQty(item.id)}>
              <AntDesign name="minus" size={16} color="#fff" />
            </TouchableOpacity>
          </LinearGradient>

          <Text style={styles.qtyText}>{item.quantity}</Text>

          <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.qtyBtn}>
            <TouchableOpacity onPress={() => increaseQty(item.id)}>
              <AntDesign name="plus" size={16} color="#fff" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeBtn}>
        <Entypo name="cross" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty 😢</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 140 }}
          />

          <View style={styles.footer}>
            <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 30 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 10,
    elevation: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  image: { width: 90, height: 90, borderRadius: 12, marginRight: 16 },
  info: { flex: 1 },
  name: { fontSize: 17, fontWeight: '700', marginBottom: 6 },
  price: { fontSize: 15, fontWeight: '600', color: '#27ae60', marginBottom: 10 },
  qtyRow: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: {
    padding: 6,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  qtyText: { marginHorizontal: 8, fontSize: 16, fontWeight: '600' },
  removeBtn: {
    backgroundColor: '#d63031',
    padding: 8,
    borderRadius: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: { fontSize: 20, fontWeight: '700', color: '#333' },
  checkoutBtn: {
    backgroundColor: '#ff7e5f',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  checkoutText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, fontWeight: '600', color: '#555' },
});
