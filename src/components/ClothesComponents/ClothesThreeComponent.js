import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import React from 'react';
import data from '../../../data/data.json';
import { getRandomProductsByCategory } from '../../../utils/getRandomProducts';

const { width } = Dimensions.get('window');
const products = getRandomProductsByCategory(data, 'Clothes', 3);

export default function ClothesThreeComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>🔥 Featured Sale</Text>

            <View style={styles.bigCard}>
                {/* Left Side - Big Product */}
                <TouchableOpacity
                    style={styles.leftCard}
                    onPress={() => Alert.alert(products[0].name)}
                >
                    <Image source={{ uri: products[0].image1 }} style={styles.leftImage} />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{products[0].discountPercentage}% OFF</Text>
                    </View>
                    <Text style={styles.leftName}>{products[0].name}</Text>
                    <Text style={{ textAlign: 'center', color: '#34495e', }}>{products[0].description}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>${products[0].price.toFixed(2)}</Text>
                        {products[0].oldPrice && <Text style={styles.oldPrice}>${products[0].oldPrice.toFixed(2)}</Text>}
                    </View>
                    <TouchableOpacity
                        style={styles.cartButton}
                        onPress={() => Alert.alert('Added to cart!', products[0].name)}
                    >
                        <Text style={styles.cartButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                {/* Right Side - Two Stacked Smaller Products */}
                <View style={styles.rightColumn}>
                    {products.slice(1).map((product, index) => (
                        <TouchableOpacity
                            key={product.id}
                            style={[styles.smallCard, { marginBottom: index < 2 ? 10 : 0 }]}
                            onPress={() => Alert.alert(product.name)}
                        >
                            <Image source={{ uri: product.image1 }} style={styles.smallImage} />
                            <View style={styles.badgeSmall}>
                                <Text style={styles.badgeTextSmall}>{product.discountPercentage}% OFF</Text>
                            </View>
                            <Text numberOfLines={1} style={styles.smallName}>{product.name}</Text>
                            <View style={styles.priceRow}>
                                <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
                                {product.oldPrice && <Text style={styles.oldPrice}>{`$${product.oldPrice.toFixed(2)}`}</Text>}
                            </View>
                            <TouchableOpacity
                                style={styles.cartButtonSmall}
                                onPress={() => Alert.alert('Added to cart!', product.name)}
                            >
                                <Text style={styles.cartButtonTextSmall}>Add to Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 15,
        color: '#2c3e50',
    },
    bigCard: {
        flexDirection: 'row',
        backgroundColor: '#ff6600',
        borderRadius: 25,
        padding: 15,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 6,
    },
    leftCard: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
    },
    leftImage: {
        width: '100%',
        height: width / 2.7,
        borderRadius: 15,
    },
    leftName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#34495e',
        marginTop: 10,
        textAlign: 'center',
    },
    rightColumn: {
        flex: 1,
        justifyContent: 'space-between',
    },
    smallCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        alignItems: 'center',
    },
    smallImage: {
        width: '100%',
        height: (width / 2.7) / 2,
        borderRadius: 12,
    },
    smallName: {
        fontSize: 14,
        fontWeight: '700',
        color: '#34495e',
        marginTop: 6,
        textAlign: 'center',
    },
    priceRow: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
    },
    price: {
        fontSize: 14,
        fontWeight: '800',
        color: '#27ae60',
        marginRight: 6,
    },
    oldPrice: {
        fontSize: 12,
        color: '#888',
        textDecorationLine: 'line-through',
    },
    badge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#e74c3c',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    badgeText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12,
    },
    badgeSmall: {
        position: 'absolute',
        top: 6,
        left: 6,
        backgroundColor: '#e67e22',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
    },
    badgeTextSmall: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 10,
    },
    cartButton: {
        marginTop: 8,
        backgroundColor: '#ff6600',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 12,
    },
    cartButtonText: {
        color: '#fff',
        fontWeight: '700',
    },
    cartButtonSmall: {
        marginTop: 6,
        backgroundColor: '#ff6600',
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    cartButtonTextSmall: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12,
    },
});
