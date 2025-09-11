import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const CATEGORY_DATA = [
  {
    id: "1",
    title: "Clothing",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    subcategories: [
      "Dresses",
      "Pants",
      "Skirts",
      "Shorts",
      "Jackets",
      "Hoodies",
      "Shirts",
      "Polo",
      "T-Shirts",
      "Tunics",
    ],
  },
  {
    id: "2",
    title: "Shoes",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    subcategories: [],
  },
  {
    id: "3",
    title: "Bags",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    subcategories: [],
  },
  {
    id: "4",
    title: "Lingerie",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    subcategories: [],
  },
  {
    id: "5",
    title: "Accessories",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    subcategories: [],
  },
  {
    id: "6",
    title: "Just for You",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    subcategories: [],
  },
];

export default function categoriesscreen() {
  const [selectedTab, setSelectedTab] = useState("Female");
  const [expanded, setExpanded] = useState("1");

  const renderSubcategories = (subcategories) => (
    <FlatList
      data={subcategories}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.subcategoryBox}>
          <Text style={styles.subcategoryText}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Categories</Text>
        <Ionicons name="close" size={24} color="black" />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {["All", "Female", "Male"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Categories List */}
      <ScrollView>
        {CATEGORY_DATA.map((cat) => (
          <View key={cat.id} style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryHeader}
              onPress={() =>
                setExpanded(expanded === cat.id ? null : cat.id)
              }
            >
              <Image source={{ uri: cat.image }} style={styles.categoryImage} />
              <Text style={styles.categoryTitle}>{cat.title}</Text>
              <Ionicons
                name={expanded === cat.id ? "chevron-up" : "chevron-down"}
                size={20}
                color="black"
                style={{ marginLeft: "auto" }}
              />
            </TouchableOpacity>

            {expanded === cat.id && cat.subcategories.length > 0 && (
              <View>{renderSubcategories(cat.subcategories)}</View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#f28c8c",
    marginHorizontal: 5,
  },
  activeTabButton: {
    backgroundColor: "#f28c8c",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  categoryContainer: {
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  subcategoryBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#f28c8c",
    borderRadius: 8,
    paddingVertical: 14,
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  subcategoryText: {
    fontSize: 14,
    color: "#333",
  },
});
