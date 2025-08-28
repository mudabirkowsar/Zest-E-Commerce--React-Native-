import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function SignupScreen({ navigation }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [focusedInput, setFocusedInput] = useState(null);

    const inputStyle = (inputName) => ({
        backgroundColor: '#F3F4F6',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        color: '#1F2937',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: focusedInput === inputName ? 0.2 : 0,
        shadowRadius: focusedInput === inputName ? 4 : 0,
        elevation: focusedInput === inputName ? 3 : 0,
        borderWidth: focusedInput === inputName ? 2 : 0,
        borderColor: focusedInput === inputName ? '#ff6600' : 'transparent',
    });

    return (
        <View>
            <View style={styles.signupImageContainer}>
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
            <View style={styles.signupButtonContainer}>
                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Name</Text>
                    <TextInput
                        placeholder='Enter Your Name'
                        placeholderTextColor={'gray'}
                        style={inputStyle('name')}
                        onFocus={() => setFocusedInput('name')}
                        onBlur={() => setFocusedInput(null)}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Email</Text>
                    <TextInput
                        keyboardType='email-address'
                        autoCapitalize='none'
                        placeholder='Enter Your Email'
                        placeholderTextColor={'gray'}
                        style={inputStyle('email')}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Password</Text>
                    <TextInput
                        placeholder='Enter Your Password'
                        placeholderTextColor={'gray'}
                        style={inputStyle('password')}
                        onFocus={() => setFocusedInput('password')}
                        onBlur={() => setFocusedInput(null)}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity
                onPress={()=>navigation.navigate("TabNavigation")}
                    style={styles.loginButton}><Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'white' }}>Sign Up</Text></TouchableOpacity>

                <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: "semibold" }}>Already have an account ? <Text style={{ color: '#ff6600', fontWeight: 'bold' }}
                onPress={() => navigation.navigate("LoginScreen")}
                >Login</Text></Text>

                <View style={{ flex: 1, justifyContent: 'center', flexDirection: "row", alignItems: 'center', gap: 20, }}>
                    <TouchableOpacity style={{ backgroundColor: '#F3F4F6', borderRadius: 30, padding: 10, }}>
                        <Image
                            source={require("../../../assets/google.png")}
                            style={{
                                height: '28',
                                width: '28',
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#F3F4F6', borderRadius: 30, padding: 10, }}>
                        <Image
                            source={require("../../../assets/facebook.png")}
                            style={{
                                height: '28',
                                width: '28',
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#F3F4F6', borderRadius: 30, padding: 10, }}>
                        <Image
                            source={require("../../../assets/apple.png")}
                            style={{
                                height: '28',
                                width: '28',
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signupImageContainer: {
        height: '40%',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    signupButtonContainer: {
        height: '60%',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: "white"
    },
    inputContainer: {
        marginBottom: 20,
    },
    loginButton: {
        borderRadius: 15,
        padding: 13,
        marginTop: 10,
        width: '95%',
        marginLeft: '2%',
        backgroundColor: '#ff6600',
    }
})