import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get("window");

const data = [
    { id: 1, title: "Smartphone", img: require("../../assets/smartphoneSale.jpeg") },
    { id: 2, title: "Shoes", img: require("../../assets/shoes.webp") },
    { id: 3, title: "Watch", img: require("../../assets/smartwatchSale.jpeg") },
    { id: 4, title: "Headphones", img: require("../../assets/headphoneSale.jpeg") },
    { id: 5, title: "T-Shirt", img: require("../../assets/tshirt.webp") },
    { id: 6, title: "Electronic", img: require("../../assets/headphoneSale.jpeg") },
];

export default function ForYouVerticalComponent() {
    return (
        <LinearGradient
            colors={['#fff5f0', '#ffe1c6']}
            style={styles.container}
        >
            <Text style={styles.heading}>For You</Text>

            <View style={styles.grid}>
                {/* First two vertical cards */}
                <View style={styles.column}>
                    <TouchableOpacity style={styles.verticalCard}>
                        <Image source={data[0].img} style={styles.image} />
                        <Text style={styles.text}>{data[0].title}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.verticalCard}>
                        <Image source={data[1].img} style={styles.image} />
                        <Text style={styles.text}>{data[1].title}</Text>
                    </TouchableOpacity>
                </View>

                {/* Next two horizontal cards */}
                <View style={styles.column}>
                    <TouchableOpacity style={styles.horizontalCard}>
                        <Image source={data[2].img} style={styles.image} />
                        <Text style={styles.text}>{data[2].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.horizontalCard}>
                        <Image source={data[3].img} style={styles.image} />
                        <Text style={styles.text}>{data[3].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.horizontalCard}>
                        <Image source={data[4].img} style={styles.image} />
                        <Text style={styles.text}>{data[4].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.horizontalCard}>
                        <Image source={data[5].img} style={styles.image} />
                        <Text style={styles.text}>{data[5].title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 20,
        margin: 15,
    },
    heading: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 15,
        color: "#111",
    },
    grid: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    column: {
        flex: 1,
        justifyContent: "space-between",
        marginHorizontal: 5,
    },
    verticalCard: {
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
    horizontalCard: {
        height: 70,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        borderRadius: 10,
        marginBottom: 5,
        marginRight: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111",
    },
});
