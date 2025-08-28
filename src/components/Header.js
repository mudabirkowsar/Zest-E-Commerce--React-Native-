import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
    return (
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
    )
}

const styles = StyleSheet.create({
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
})