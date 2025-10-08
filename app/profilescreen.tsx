import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

 const RECENT = [
    "https://randomuser.me/api/portraits/women/11.jpg",
    "https://randomuser.me/api/portraits/women/22.jpg",
    "https://randomuser.me/api/portraits/women/33.jpg",
    "https://randomuser.me/api/portraits/men/44.jpg",
    "https://randomuser.me/api/portraits/women/55.jpg",
  ];

const STORIES = [
  { id: "s1", name: "Anna", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=60" },
  { id: "s2", name: "Maya", img: "https://images.unsplash.com/photo-1545996124-1b6f6f0d7b98?w=400&q=60" },
  { id: "s3", name: "Lina", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=60" },
  { id: "s4", name: "Nora", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=60" },
  { id: "s5", name: "Eve", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=60" },
];

const NEW_ITEMS = [
  { id: "n1", title: "Bright Top", price: "$25", img: "https://images.unsplash.com/photo-1544211412-2d9b5f2b62f4?w=1200&q=80" },
  { id: "n2", title: "Bag", price: "$40", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80" },
  { id: "n3", title: "Watch", price: "$120", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80" },
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
     const TopProduct = [

            "https://randomuser.me/api/portraits/women/33.jpg",
            "https://randomuser.me/api/portraits/men/44.jpg",
            "https://randomuser.me/api/portraits/women/55.jpg",
            "https://randomuser.me/api/portraits/women/11.jpg",
            "https://randomuser.me/api/portraits/women/22.jpg",
  
    ];


export default function profilescreen() {

  return (

    <ScrollView style={styles.container}>
      
      <View style={styles.topRow}>

        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.profilePic}
        />
        <TouchableOpacity style={styles.activityButton}>

          <Text style={styles.activityText}>My Activity</Text>

        </TouchableOpacity>

        <View style={styles.iconRow}>

          <Ionicons name="grid-outline" size={22} color="#333" style={styles.icon} />
          <Ionicons name="menu-outline" size={22} color="#333" style={styles.icon} />
          <Ionicons name="settings-outline" size={22} color="#333" style={styles.icon}/>

        </View>

      </View>

     
      <Text style={styles.greeting}>Hello, Romina!</Text>

      <View style={styles.announcementBox}>

        <View style={{ flex: 1 }}>

          <Text style={styles.announcementTitle}>Announcement</Text>

          <Text style={styles.announcementText}>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit luctus libero ac vulputate.

          </Text>

        </View>
        
        <TouchableOpacity style={styles.arrowButton}>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
      <View style={styles.rowHeader}>
        <Text style={styles.sectionTitle}>Recently viewed</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScroll}>
        {RECENT.map((item, index) => (
          <TouchableOpacity onPress={() => Alert.alert("Working on it")}>
          <Image key={index} source={{ uri: item }} style={styles.recentImage} />
       </TouchableOpacity>

          
        ))}
      </ScrollView>
     </View>
    
       <View style={styles.section}>
      <View style={styles.rowHeader}>
        <Text style={styles.sectionTitle}>My Orders</Text>
      </View>

      <View style={styles.ordersRow}>
        <Pressable style={styles.orderCard}
        onPress={() => Alert.alert("Working on it")}
        >
          <Text style={styles.labletext}>To Pay</Text>
        </Pressable>

        <Pressable style={styles.orderCard}
        onPress={() => Alert.alert("Working on it")}>
          <Text style={styles.labletext}>To Recieve</Text>
        </Pressable>

        <Pressable style={styles.orderCard}
        onPress={() => Alert.alert("Working on it")}>
          <Text style={styles.labletext}>To Review</Text>
        </Pressable>
      </View>
     </View>
     <View style={styles.section}>
      <View style={styles.rowHeader}>
        <Text style={styles.sectionTitle}>Stories</Text>
      </View>

      <FlatList
        data={STORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
       
            <Pressable style={styles.storyItem} onPress={() => Alert.alert("Working on it")} >

            <Image source={{ uri: item.img }} style={styles.storyAvatar} />

            <Text style={styles.storyName}>{item.name}</Text>

            </Pressable>
        )}
      />
      
     </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop:50,
    paddingBottom:10
    
    
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  activityButton: {
    backgroundColor: "#f97316",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginLeft: 10,
  },
  activityText: {
    color: "#fff",
    fontWeight: "600",
  },
  iconRow: {
    flexDirection: "row",
    marginLeft: "auto",
    alignItems:'center'
  },
  icon: {
    marginHorizontal: 5,
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
  
  },
  announcementBox: {
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  announcementTitle: {
    fontWeight: "700",
    marginBottom: 5,
  },
  announcementText: {
    color: "#555",
    fontSize: 13,
  },
  arrowButton: {
    backgroundColor: "#f97316",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  section: {
    marginBottom: 10,
  },
  rowHeader: {
    width: "100%",
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  recentScroll: {
    flexDirection: "row",
  },
  recentImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  ordersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  orderCard: {
    flex: 1,
    backgroundColor: "#FAFBFF",
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  labletext: {
    color: "#FA8232",
    fontSize: 16,
  },
  storyItem: {
    width:102,
    alignItems: "center",
    margin:3
  },
  storyAvatar: {
    width: 100,
    height: 170,
    borderRadius: 6,
    resizeMode: "cover",
    
  },
  storyName: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "600",
  }, 
});
