import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

const { width } = Dimensions.get("window");

const products = [
    { id: "1", name: "Lorem ipsum dolor sit amet", price: "$17,00", image: "https://randomuser.me/api/portraits/women/19.jpg" },
    { id: "2", name: "Lorem ipsum dolor sit amet", price: "$17,00", image: "https://randomuser.me/api/portraits/women/45.jpg" },
    { id: "3", name: "Lorem ipsum dolor sit amet", price: "$17,00", image: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: "4", name: "Lorem ipsum dolor sit amet", price: "$17,00", image: "https://randomuser.me/api/portraits/women/85.jpg" },
];

export default function shopscreen() {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.allItemsHeader}>
                
              <Pressable
  style={styles.seeAllIconWrap}
  onPress={() => router.back()}
>
  <Ionicons name="arrow-back" size={16} color="#fff" />
</Pressable>

                <Text style={styles.allItemsText}>All Items</Text>

            </View>


            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                numColumns={2} // 👈 This makes 5 items per row
                columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 15 }}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.productCard}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />
                        <Text style={styles.productName} numberOfLines={2}>
                            {item.name}
                        </Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                    </View>
                )}
            />


        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 40,
    },
      seeAllIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FF7A00",
    alignItems: "center",
    justifyContent: "center",
  },
    allItemsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: "center",
    },
    allItemsText: {
        fontSize: 18,
        fontWeight: "600",
    },
    productsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    productCard: {
        width: width * 0.44,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 15,
        overflow: "hidden",
        elevation: 2,
        paddingBottom: 10,
    },
    productImage: {
        width: "100%",
        height: 180,
        resizeMode: "cover",
    },
    productName: {
        fontSize: 13,
        fontWeight: "500",
        paddingHorizontal: 8,
        marginTop: 6,
        color: "#333",
    },
    productPrice: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000",
        paddingHorizontal: 8,
        marginTop: 4,
    },
});
