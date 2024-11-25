import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="Search..." />
        <Image
          source={{ uri: "https://via.placeholder.com/100x40" }} // Placeholder logo
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Offers Section */}
      <View style={styles.offerSection}>
        <Text style={styles.offerTitle}>Available Offers</Text>
        <Text style={styles.offerDetails}>Special Discounts on SUVs</Text>
        <TouchableOpacity style={styles.offerButton}>
          <Text style={styles.offerButtonText}>Avail Now</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Cars Section */}
      <View style={styles.featuredCars}>
        <Text style={styles.sectionTitle}>Featured Cars</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featuredCar}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image
              style={styles.carImage}
            />
            <Text style={styles.carName}>Car 1</Text>
          </View>
          <View style={styles.featuredCar}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image
              style={styles.carImage}
            />
            <Text style={styles.carName}>Car 2</Text>
          </View>
          <View style={styles.featuredCar}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image
              style={styles.carImage}
            />
            <Text style={styles.carName}>Car 3</Text>
          </View>
        </ScrollView>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("TestDrive")}
        >
          <Text style={styles.actionButtonText}>Test Drive</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Financing")}
        >
          <Text style={styles.actionButtonText}>Apply Financing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Inventory")}
        >
          <Text style={styles.actionButtonText}>View Inventory</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  logo: {
    width: 100,
    height: 40,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 60,
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  offerSection: {
    backgroundColor: "#007BFF",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  offerDetails: {
    color: "#fff",
    marginBottom: 10,
  },
  offerButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  offerButtonText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  featuredCars: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featuredCar: {
    marginRight: 15,
    alignItems: "center",
  },
  carImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  carName: {
    marginTop: 5,
    fontWeight: "bold",
  },
  actions: {
    marginHorizontal: 20,
  },
  actionButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
