import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

// Sample car data for recommendations
const carData = [
  { id: "1", model: "SUV", brand: "Toyota", price: 30000, image: require("../assets/car3.png") },
  { id: "2", model: "Sedan", brand: "Honda", price: 20000, image: require("../assets/car4.png") },
  { id: "3", model: "Coupe", brand: "Tesla", price: 35000, image: require("../assets/car5.png") },
];

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carData);
  const [recommendedCars, setRecommendedCars] = useState([]);

  // Check if the user is logged in
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      navigation.replace("Login");
    } else {
      setUser(currentUser);
      fetchRecommendedCars();
    }
  }, [navigation]);

  // Fetch recommended cars
  const fetchRecommendedCars = () => {
    const recommendations = carData.filter((car) => car.price <= 30000); // Example filter
    setRecommendedCars(recommendations);
  };

  // Handle logout with confirmation
  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        onPress: async () => {
          try {
            await signOut(auth);
            navigation.replace("Login");
          } catch (error) {
            console.error("Logout error:", error);
          }
        },
      },
    ]);
  };

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = carData.filter((car) =>
      car.brand.toLowerCase().includes(query.toLowerCase()) ||
      car.model.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  // Render a single car item
  const renderCar = ({ item }) => (
    <View style={styles.carItem}>
      <Image source={item.image} style={styles.carImage} />
      <Text style={styles.carTitle}>
        {item.brand} {item.model}
      </Text>
      <Text style={styles.carDetails}>Price: ${item.price}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search cars..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome, {user ? user.displayName || "User" : "Guest"}!</Text>
      </View>

      {/* Recommendations Section */}
      <View style={styles.recommendationSection}>
        <Text style={styles.sectionTitle}>Recommended Cars</Text>
        <FlatList
          data={recommendedCars}
          keyExtractor={(item) => item.id}
          renderItem={renderCar}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>

      {/* Featured Cars Section */}
      <View style={styles.featuredCars}>
        <Text style={styles.sectionTitle}>Search Results</Text>
        <FlatList
          data={filteredCars}
          keyExtractor={(item) => item.id}
          renderItem={renderCar}
          contentContainerStyle={styles.list}
        />
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
          onPress={() => navigation.navigate("CarFilter")}
        >
          <Text style={styles.actionButtonText}>Car Filter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
    width: 80,
    height: 40,
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
  welcomeSection: {
    padding: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  recommendationSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  carItem: {
    marginRight: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    width: 200,
  },
  carImage: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  carDetails: {
    fontSize: 14,
    marginTop: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
