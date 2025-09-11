import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const discounts = ["All", "10%", "20%", "30%", "40%", "50%"];
const products = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$16.00",
    oldPrice: "$20.00",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$16.00",
    oldPrice: "$20.00",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$16.00",
    oldPrice: "$20.00",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
    {
    id: "1",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$16.00",
    oldPrice: "$20.00",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$16.00",
    oldPrice: "$20.00",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
];

export default function flashscreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.flashText}>Flash Sale</Text>
          <Text style={styles.subText}>Choose Your Discount</Text>
        </View>
        <View style={styles.timerBox}>
          <Ionicons name="time-outline" size={18} color="black" />
          <Text style={styles.timerText}>00 36 58</Text>
        </View>
      </View>

      {/* Discount Tabs */}
      <View style={styles.tabContainer}>
        {discounts.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, item === "20%" && styles.activeTab]}
          >
            <Text
              style={[styles.tabText, item === "20%" && styles.activeTabText]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
      
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contentContainerStyle}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/11.jpg" }}
            style={styles.bannerImage}
          />
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/12.jpg" }}
            style={styles.bannerImage}
          />
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/13.jpg" }}
            style={styles.bannerImage}
          />
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/14.jpg" }}
            style={styles.bannerImage}
          />
           <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/12.jpg" }}
            style={styles.bannerImage}
          />
            <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/13.jpg" }}
            style={styles.bannerImage}
          />
          </ScrollView>
       

        {/* Section Title */}
        <Text style={styles.sectionTitle}>20% Discount</Text>

        {/* Product Grid */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.productList}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>-20%</Text>
              </View>
              <Text style={styles.productTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <View style={styles.priceRow}>
                <Text style={styles.newPrice}>{item.price}</Text>
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  flashText: { fontSize: 20, fontWeight: "bold", color: "#000" },
  subText: { fontSize: 12, color: "gray" },
  timerBox: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: "center",
  },
  timerText: { marginLeft: 5, fontWeight: "bold", fontSize: 12 },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
  },
  tabText: { color: "gray", fontWeight: "bold" },
  activeTab: { backgroundColor: "#ff6600" },
  activeTabText: { color: "#fff" },

  contentContainerStyle: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 15,
  
  },

  bannerImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
  },

  productList: { paddingHorizontal: 10 },
  productCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 12,
    elevation: 3,
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  discountBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ff4d4d",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  discountText: { color: "#fff", fontSize: 12, fontWeight: "bold" },

  productTitle: { marginTop: 8, fontSize: 12, color: "#333" },
  priceRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  newPrice: { fontSize: 14, fontWeight: "bold", color: "#000" },
  oldPrice: {
    fontSize: 12,
    color: "gray",
    marginLeft: 5,
    textDecorationLine: "line-through",
  },


});
