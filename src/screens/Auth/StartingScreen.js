import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function StartingScreen({ navigation }) {
  return (
    <View>

      {/* Image Container  */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/Signup.jpg")}
          style={{
            height: '100%',
            width: '100%',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        />
      </View>

      {/* Buttons Container  */}
      <View style={styles.buttonContainer}>
        <Text style={{ fontSize: 30, textAlign: 'center', color: "#ff6600", fontWeight: 'bold', marginTop: 30, }}>Let's Get Started</Text>
        <Text style={{ textAlign: 'center', fontSize: 15, color: 'gray', marginTop: 5, }}>Signup or Login to Explore All Products.</Text>

        {/* Signup button  */}
        <TouchableOpacity
          onPress={() => navigation.navigate("SignupScreen")}
          style={styles.loginButton}><Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'white' }}>Sign Up</Text></TouchableOpacity>

        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: "semibold" }}>Already have an account ? <Text
          onPress={() => navigation.navigate("LoginScreen")}
          style={{ color: '#ff6600', fontWeight: 'bold' }}>Login</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '65%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  buttonContainer: {
    height: '35%',
    width: '100%',
  },
  loginButton: {
    borderRadius: 15,
    padding: 15,
    marginTop: 30,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#ff6600',
  }
})