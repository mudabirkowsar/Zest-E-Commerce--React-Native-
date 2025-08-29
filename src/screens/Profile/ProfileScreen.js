import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/Firebase';

export default function ProfileScreen() {

  const handleLogout =async () =>{
    await signOut(auth);
  }
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=12',
  };

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Info */}
        <View style={styles.profileCard}>
          <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="shoppingcart" size={24} color="#fff" />
            <Text style={styles.actionText}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="favorite" size={24} color="#fff" />
            <Text style={styles.actionText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="setting" size={24} color="#fff" />
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Other Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeader}>Account Info</Text>
          <Text style={styles.infoText}>Username: johndoe</Text>
          <Text style={styles.infoText}>Phone: +91 9876543210</Text>
          <Text style={styles.infoText}>Address: 123 Zest Street, Mumbai</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}
        onPress={handleLogout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    paddingBottom: 30,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#ff6347',
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    marginTop: 5,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  infoHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
