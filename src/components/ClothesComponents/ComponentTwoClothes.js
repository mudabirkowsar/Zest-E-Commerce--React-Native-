import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import React from 'react';
import data from '../../../data/data.json';
import { getRandomProductsByCategory } from '../../../utils/getRandomProducts';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");
const products = getRandomProductsByCategory(data, 'Clothes', 6); // Get 6 random products

export default function ComponentTwoClothes() {
    const navigation = useNavigation();

    const handleAddToCart = (product) => {
        Alert.alert('Added to Cart', `${product.name} has been added to your cart!`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Top Picks for You</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {products.map((product) => (
                    <TouchableOpacity
                        key={product.id}
                        style={styles.card}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate("ProductDescriptionScreen", { product: product })}
                    >
                        <Image source={{ uri: product.image1 }} style={styles.image} />
                        <View style={styles.info}>
                            <Text numberOfLines={1} style={styles.name}>{product.name}</Text>
                            <View style={styles.priceRow}>
                                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                                {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>}
                            </View>
                            <TouchableOpacity
                                style={styles.cartButton}
                                onPress={() => handleAddToCart(product)}
                            >
                                <Text style={styles.cartButtonText}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{product.discountPercentage}% OFF</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: "800",
        marginBottom: 15,
        color: "#2c3e50",
        paddingHorizontal: 15,
    },
    scrollContainer: {
        paddingLeft: 15,
    },
    card: {
        width: width * 0.55,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginRight: 15,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: width / 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    info: {
        padding: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: "700",
        color: "#34495e",
        marginBottom: 6,
    },
    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: "800",
        color: "#27ae60",
        marginRight: 8,
    },
    oldPrice: {
        fontSize: 14,
        color: "#888",
        textDecorationLine: "line-through",
    },
    badge: {
        position: "absolute",
        top: 10,
        right: 10,
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
    cartButton: {
        marginTop: 10,
        backgroundColor: "#ff6600",
        paddingVertical: 8,
        borderRadius: 12,
        alignItems: "center",
    },
    cartButtonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 14,
    },
});
