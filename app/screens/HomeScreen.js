import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";

function HomeScreen() {
  const categories = [
    "Construction",
    "Electrical",
    "Plumbing",
    "Cleaning",
    "Moving",
  ];
  const featuredServices = [
    {
      title: "TV Mounting",
      price: "$120",
      image:
        "https://cdn.usegalileo.ai/sdxl10/4ee6a45c-746e-4636-9674-748d3681fa28.png",
    },
    {
      title: "Furniture Assembly",
      price: "$150",
      image:
        "https://cdn.usegalileo.ai/sdxl10/4f3991a7-b8f8-44b7-9882-c6f58043b768.png",
    },
    {
      title: "Light Installation",
      price: "$90",
      image:
        "https://cdn.usegalileo.ai/sdxl10/88a93e27-5020-4c63-9d58-3e0821467892.png",
    },
    {
      title: "Moving Services",
      price: "$300",
      image:
        "https://cdn.usegalileo.ai/sdxl10/431178a8-fefb-43b2-90b4-749113258ecd.png",
    },
    {
      title: "Cleaning Services",
      price: "$80",
      image:
        "https://cdn.usegalileo.ai/sdxl10/5a8b7a8e-4f8e-4b8e-9b8e-4b8e4b8e4b8e.png",
    },
    {
      title: "Handyman Services",
      price: "$100",
      image:
        "https://cdn.usegalileo.ai/sdxl10/6b8c7a8e-5f9e-5b9e-9c9e-5c9e5c9e5c9e.png",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity style={styles.bellButton}>
            {/* Add bell icon here */}
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            {/* Add search icon here */}
            <TextInput
              placeholder="Search for services..."
              placeholderTextColor="#90adcb"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryChip}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Services */}
        <Text style={styles.sectionTitle}>Featured services</Text>
        <View style={styles.servicesGrid}>
          {featuredServices.map((service, index) => (
            <View key={index} style={styles.serviceCard}>
              <Image
                source={{ uri: service.image }}
                style={styles.serviceImage}
              />
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101a23",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingBottom: 8,
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    paddingLeft: 48,
  },
  bellButton: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    padding: 16,
    paddingTop: 12,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#223649",
    borderRadius: 12,
    height: 48,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    color: "white",
    padding: 8,
    fontSize: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 12,
  },
  categoryChip: {
    backgroundColor: "#223649",
    paddingHorizontal: 16,
    height: 32,
    borderRadius: 12,
    justifyContent: "center",
    marginHorizontal: 4,
  },
  categoryText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  sectionTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    padding: 16,
    paddingBottom: 12,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    gap: 12,
  },
  serviceCard: {
    width: (Dimensions.get("window").width - 48) / 2,
    marginBottom: 12,
  },
  serviceImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 12,
  },
  serviceInfo: {
    gap: 4,
  },
  serviceTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  servicePrice: {
    color: "#90adcb",
    fontSize: 14,
  },
});

export default HomeScreen;
