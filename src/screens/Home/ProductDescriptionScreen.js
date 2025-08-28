import React, { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get("window");

export default function ProductDescriptionScreen({ route }) {
    const navigation = useNavigation();
    const { product } = route.params;
    const [activeIndex, setActiveIndex] = useState(0);
    const [liked, setLiked] = useState(false);

    const badges = [
        { label: `Color: ${product.color}`, color: "#f59e0b" },
        { label: `Warranty: ${product.warranty}`, color: "#10b981" },
        { label: `Delivery: ${product.deliveryTime}`, color: "#3b82f6" },
        { label: `Stock: ${product.stock}`, color: "#ef4444" },
        { label: `Category: ${product.category}`, color: "#8b5cf6" },
    ];

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Heart Icon */}
            <TouchableOpacity style={styles.heartButton} onPress={() => setLiked(!liked)}>
                <AntDesign name={liked ? "heart" : "hearto"} size={24} color={liked ? "#ff4757" : "#fff"} />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Image Carousel as Background */}
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={(e) => setActiveIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
                >
                    {[product.image1, product.image2, product.image3].map((img, index) => (
                        <ImageBackground key={index} source={{ uri: img }} style={styles.imageBackground}>
                            <LinearGradient
                                colors={['rgba(0,0,0,0.6)', 'transparent']}
                                style={styles.imageOverlay}
                            />
                            <View style={styles.textOverlay}>
                                <Text style={styles.name}>{product.name}</Text>
                                <Text style={styles.brand}>by {product.brand}</Text>
                                <Text style={styles.descriptionOverlay} numberOfLines={2}>{product.description}</Text>
                            </View>
                        </ImageBackground>
                    ))}
                </ScrollView>

                {/* Dots */}
                <View style={styles.dotsContainer}>
                    {[product.image1, product.image2, product.image3].map((_, index) => (
                        <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
                    ))}
                </View>

                {/* Product Info */}
                <View style={styles.infoContainer}>

                    <View>
                        <Text style={styles.name1}>{product.name}</Text>
                        <Text style={styles.brand1}>by {product.brand}</Text>
                        <Text style={styles.descriptionOverlay1} numberOfLines={2}>{product.description}</Text>
                    </View>
                    {/* Price */}
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                        <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>
                        <Text style={styles.discount}>{product.discountPercentage}% OFF</Text>
                    </View>

                    {/* Badges */}
                    <View style={styles.badgesContainer}>
                        {badges.map((b, idx) => (
                            <View key={idx} style={[styles.badge, { backgroundColor: b.color }]}>
                                <Text style={styles.badgeText}>{b.label}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Description Section */}
                    <Text style={styles.sectionTitle}>Full Description</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Sticky Buttons */}
            <View style={styles.stickyButtons}>
                <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyButton}>
                    <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.buyGradient}>
                        <Text style={styles.buyButtonText}>Buy Now</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5" },
    backButton: {
        position: "absolute",
        top: 40,
        left: 15,
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.4)",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    heartButton: {
        position: "absolute",
        top: 40,
        right: 15,
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.4)",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    imageBackground: {
        width: width,
        height: width * 1.05,
        justifyContent: "flex-end",
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
    },
    textOverlay: {
        padding: 20,
    },
    name: { fontSize: 22, fontWeight: "800", color: "#fff", marginBottom: 4 },
    name1: { fontSize: 22, fontWeight: "800", color: "black", marginBottom: 4 },
    brand: { fontSize: 14, color: "#ddd", marginBottom: 6 },
    brand1: { fontSize: 14, color: "black", marginBottom: 6 },
    descriptionOverlay: { fontSize: 14, color: "#eee", lineHeight: 20 },
    descriptionOverlay1: { fontSize: 14, color: "black", lineHeight: 20 },
    dotsContainer: { flexDirection: "row", justifyContent: "center", marginTop: 8 },
    dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#ccc", marginHorizontal: 4 },
    activeDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: "#ff7e5f" },
    infoContainer: { padding: 20 },
    priceRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
    price: { fontSize: 20, fontWeight: "800", color: "#27ae60", marginRight: 8 },
    oldPrice: { fontSize: 14, color: "#b2bec3", textDecorationLine: "line-through", marginRight: 8 },
    discount: { fontSize: 14, color: "#d63031", fontWeight: "700" },
    badgesContainer: { flexDirection: "row", flexWrap: "wrap", marginVertical: 12 },
    badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginRight: 8, marginBottom: 8 },
    badgeText: { color: "#fff", fontSize: 12, fontWeight: "700" },
    sectionTitle: { fontSize: 16, fontWeight: "700", color: "#2d3436", marginBottom: 4 },
    description: { fontSize: 14, color: "#636e72", lineHeight: 20 },
    stickyButtons: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        padding: 15,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    cartButton: {
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ff7e5f",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        marginRight: 10,
    },
    cartButtonText: { color: "#ff7e5f", fontWeight: "700", fontSize: 16 },
    buyButton: { flex: 1, borderRadius: 10, overflow: "hidden" },
    buyGradient: { paddingVertical: 14, alignItems: "center", borderRadius: 10 },
    buyButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
