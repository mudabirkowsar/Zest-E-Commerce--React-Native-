import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

const { width } = Dimensions.get("window");

export default function MainBannerForYou({ imageOne, imageTwo, imageThree, imageFour }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % bannerData.length;
            setCurrentIndex(nextIndex);

            if (flatListRef.current) {
                flatListRef.current.scrollToIndex({
                    animated: true,
                    index: nextIndex,
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const bannerData = [
        imageOne, imageTwo, imageThree, imageFour
    ];
    return (
        <View style={{ marginTop: 25 }}>
            <FlatList
                ref={flatListRef}
                data={bannerData}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image source={item} style={styles.banner} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 170,
        width: width - 40,
        resizeMode: "cover",
        borderRadius: 15,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
})