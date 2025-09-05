
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import React from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
// ...existing code...
// import camera1 from '';
// ...existing code...


import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const BANNERS = [
    {
        id: "1",
        title: "Big Sale",
        subtitle: "Up to 50% off",
        image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    },
    {
        id: "2",
        title: "Flash Deals",
        subtitle: "Limited Time Offer",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
        id: "3",
        title: "New Arrivals",
        subtitle: "Latest Collection",
        image: "https://images.unsplash.com/photo-1541737114973-3df87b2f69a4",
    },
];

const CATEGORIES = [
    {
        id: "1",
        title: "Clothing",
        count: 109,
        images: [
            "https://images.unsplash.com/photo-1520975922219-3b2adfc8b2de",
            "https://images.unsplash.com/photo-1475180098004-ca77a66827be",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
        ],
    },
    {
        id: "2",
        title: "Shoes",
        count: 530,
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            "https://images.unsplash.com/photo-1542291020-92e0b173f18b",
            "https://images.unsplash.com/photo-1519741497674-611481863552",
            "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
        ],
    },
    {
        id: "3",
        title: "Bags",
        count: 87,
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
            "https://images.unsplash.com/photo-1584917865442-1c76e518f86d",
            "https://images.unsplash.com/photo-1592878849122-7e9d5f4d0a36",
            "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
        ],
    },
    {
        id: "4",
        title: "Lingerie",
        count: 218,
        images: [
            "https://images.unsplash.com/photo-1541737114973-3df87b2f69a4",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
            "https://images.unsplash.com/photo-1544211412-2d9b5f2b62f4",
            "https://images.unsplash.com/photo-1542216494-5b694d2bd4f7",
        ],
    },
    {
        id: "5",
        title: "Watch",
        count: 218,
        images: [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
            "https://images.unsplash.com/photo-1526045478516-99145907023c",
            "https://images.unsplash.com/photo-1518544801976-3e3b64f2a9b4",
            "https://images.unsplash.com/photo-1511381939415-c1c76a86da7e",
        ],
    },
    {
        id: "6",
        title: "Hoodies",
        count: 218,
        images: [
            "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            "https://images.unsplash.com/photo-1544441893-675973e31985",
            "https://images.unsplash.com/photo-1520975661595-64543b4e7cd2",
            "https://images.unsplash.com/photo-1520975345030-1f0d6f76e3c6",
        ],
    },
];

const TOP_PRODUCTS = [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa", // bag
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d", // watch
    "https://images.unsplash.com/photo-1520975916090-3105956dac38", // hoodie
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",   // shoes
    "https://images.unsplash.com/photo-1541737114973-3df87b2f69a4", // lingerie
];

const PRODUCTS = [
    {
        id: "1",
        name: "Nike Air Max",
        price: "$120",
        image: "https://images.unsplash.com/photo-1606813902917-3c0ebfc2a07c",
    },
    {
        id: "2",
        name: "Adidas Ultraboost",
        price: "$140",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
        id: "3",
        name: "Puma Sneakers",
        price: "$99",
        image: "https://images.unsplash.com/photo-1606813902907-3c0ebfc2a07c",
    },
];

export default function homescreen() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.header}>

                <Text style={styles.headerTitle}>Shop</Text>

                <View style={styles.inputview}>
                    <TextInput
                        placeholder="Search"
                    />

                    <Image
                        source={require('../../assets/images/camera1.png')}
                    />

                </View>

            </View>

            <View style={styles.bannerWrapper}>
                <Swiper
                    autoplay
                    autoplayTimeout={3}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                    showsButtons={false}
                >
                    {BANNERS.map((item) => (
                        <ImageBackground
                            key={item.id}
                            source={{ uri: item.image }}
                            style={styles.bannerSlide}
                            imageStyle={{ borderRadius: 15 }}
                        >
                            <View style={styles.bannerTextBox}>
                                <Text style={styles.bannerTitle}>{item.title}</Text>
                                <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
                            </View>
                        </ImageBackground>
                    ))}
                </Swiper>
            </View>



            <View style={styles.sectionWrapper}>

                <View style={styles.sectionHeader}>

                    <Text style={styles.sectionTitle}>Categories</Text>

                    <Pressable style={styles.seeAllBtn}>

                        <Text style={styles.seeAllText}>See All</Text>
                        <View style={styles.seeAllIconWrap}>

                            <Ionicons name="arrow-forward" size={16} color="#fff" />
                        </View>
                    </Pressable>
                </View>

                <FlatList
                    data={CATEGORIES}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ gap: 12 }}
                    contentContainerStyle={{ gap: 12 }}
                    renderItem={({ item }) => (
                        <Pressable style={styles.catCard}>
                            {/* Mosaic Images */}
                            <View style={styles.mosaic}>
                                <View style={styles.row}>
                                    <Image source={{ uri: item.images[0] }} style={styles.tile} />
                                    <Image source={{ uri: item.images[1] }} style={styles.tile} />
                                </View>
                                <View style={styles.row}>
                                    <Image source={{ uri: item.images[2] }} style={styles.tile} />
                                    <Image source={{ uri: item.images[3] }} style={styles.tile} />
                                </View>
                            </View>

                            {/* Name + Count */}
                            <View style={styles.metaRow}>
                                <Text style={styles.catName}>{item.title}</Text>
                                <View style={styles.countPill}>
                                    <Text style={styles.countText}>{item.count}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View>

            <View style={styles.wrapper}>
                {/* Title */}
                <Text style={styles.title}>Top Products</Text>

                {/* Horizontal list */}
                <FlatList
                    data={TOP_PRODUCTS}
                    horizontal
                    keyExtractor={(item, idx) => idx.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 12 }}
                    renderItem={({ item }) => (
                        <View style={styles.circleWrap}>
                            <Image source={{ uri: item }} style={styles.circleImg} />
                        </View>
                    )}
                />
            </View>

            <View style={styles.sectionHeader}>

                <Text style={styles.sectionTitle}>New Item</Text>

                <Pressable style={styles.seeAllBtn}>

                    <Text style={styles.seeAllText}>See All</Text>
                    <View style={styles.seeAllIconWrap}>

                        <Ionicons name="arrow-forward" size={16} color="#fff" />
                    </View>
                </Pressable>

            </View>

            <FlatList
                data={PRODUCTS}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable style={styles.productCard}>
                        <Image source={{ uri: item.image }} style={styles.productImg} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                    </Pressable>
                )}
            />



            <View style={styles.sectionHeader}>

                <Text style={styles.sectionTitle}>Flash Sale</Text>

                <Pressable style={styles.seeAllBtn}>

                    <Text style={styles.seeAllText}>See All</Text>
                    <View style={styles.seeAllIconWrap}>

                        <Ionicons name="arrow-forward" size={16} color="#fff" />
                    </View>
                </Pressable>
            </View>

            <FlatList
                data={PRODUCTS}
                horizontal
                keyExtractor={(item) => item.id + "flash"}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable style={styles.saleCard}>
                        <Image source={{ uri: item.image }} style={styles.saleImg} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                    </Pressable>
                )}
            />

            <View style={styles.sectionHeader}>

                <Text style={styles.sectionTitle}>Most Popular</Text>

                <Pressable style={styles.seeAllBtn}>

                    <Text style={styles.seeAllText}>See All</Text>
                    <View style={styles.seeAllIconWrap}>

                        <Ionicons name="arrow-forward" size={16} color="#fff" />
                    </View>
                </Pressable>
            </View>

            <FlatList
                data={PRODUCTS}
                horizontal
                keyExtractor={(item) => item.id + "popular"}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable style={styles.productCard}>
                        <Image source={{ uri: item.image }} style={styles.productImg} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                    </Pressable>
                )}
            />

            <View style={styles.sectionHeader}>

                <Text style={styles.sectionTitle}>Just For You</Text>

                <Pressable style={styles.seeAllBtn}>

                    <Text style={styles.seeAllText}>See All</Text>
                    <View style={styles.seeAllIconWrap}>

                        <Ionicons name="arrow-forward" size={16} color="#fff" />
                    </View>
                </Pressable>
            </View>

            <FlatList
                data={PRODUCTS}
                horizontal
                keyExtractor={(item) => item.id + "popular"}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable style={styles.productforyou}>
                        <Image source={{ uri: item.image }} style={styles.productImg} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                    </Pressable>
                )}
            />

        </ScrollView>
    );
}


const RADIUS = 12;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
    },
    header: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "700",
    },
    inputview: {
        height: 40,
        width: 240,
        backgroundColor: '#F8F8F8',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    bannerWrapper: { height: 180, marginVertical: 20 },
    bannerSlide: {
        width: width - 30,
        marginHorizontal: 15,
        height: 180,
        borderRadius: 15,
        justifyContent: "center",
        padding: 20,
    },
    bannerTextBox: {
        backgroundColor: "rgba(0,0,0,0.35)",
        padding: 10,
        borderRadius: 10,
        width: "70%",
    },
    bannerTitle: { fontSize: 22, fontWeight: "700", color: "#fff" },
    bannerSubtitle: { fontSize: 16, color: "#fff", marginTop: 4 },
    dot: {
        backgroundColor: "#ddd",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: "#FF7A00",
        width: 16,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    banner: {
        backgroundColor: "#FFA726",
        borderRadius: 15,
        marginVertical: 20,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
   
    wrapper: {
        marginTop: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 6,
    },
    circleWrap: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 12,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

        // shadow
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    circleImg: {
        width: 64,
        height: 64,
        borderRadius: 32,
        resizeMode: "cover",
    },

    bannerImg: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        borderRadius: 40,
    },

    // Categories
    sectionWrapper: { marginBottom: 20 },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        alignItems: "center",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    link: {
        fontSize: 14,
        color: "#FF5722",
    },
    seeAllBtn: { flexDirection: "row", alignItems: "center", gap: 10 },
    seeAllText: { fontSize: 14, fontWeight: "600", color: "#2e2e2e" },
    seeAllIconWrap: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "#FF7A00",
        alignItems: "center",
        justifyContent: "center",
    },

    catCard: {
        flex: 1,
        backgroundColor: "#F5F7FB",
        borderRadius: RADIUS,
        padding: 8,
    },
    mosaic: { gap: 6 },
    row: { flexDirection: "row", gap: 6 },
    tile: {
        flex: 1,
        height: 70,
        borderRadius: 10,
        backgroundColor: "#e9eef6",
    },
    metaRow: {
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    catName: { fontSize: 16, fontWeight: "700", color: "#1b1b1b", flex: 1 },
    countPill: {
        paddingHorizontal: 10,
        height: 24,
        borderRadius: 999,
        backgroundColor: "#E8F0FF",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
    countText: { fontSize: 12, fontWeight: "700", color: "#2F5FFF" },

    // Products
    productCard: { marginRight: 15, width: 120 },
    productImg: { width: 120, height: 120, borderRadius: 10 },
    productName: { marginTop: 8, fontSize: 14, fontWeight: "500" },
    productPrice: { fontSize: 14, color: "#FF5722", fontWeight: "600" },

    saleCard: {
        marginRight: 15,
        width: 140,
        borderRadius: 10,
        backgroundColor: "#FFF3E0",
        padding: 10,
    },
    saleImg: {
        width: 120,
        height: 120,
        borderRadius: 10,
        alignSelf: "center",
    },
    productforyou: {

    }
});
