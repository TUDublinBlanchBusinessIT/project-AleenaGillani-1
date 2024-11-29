import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from "react-native";
import { auth } from "../firebaseConfig"; // Firebase Authentication
import { signOut } from "firebase/auth"; // Firebase signOut method

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  // Check if the user is logged in on component mount
  useEffect(() => {
    const currentUser = auth.currentUser; // Get the current user from Firebase
    if (!currentUser) {
      // If no user is logged in, navigate to the Login screen
      navigation.replace("Login");
    } else {
      setUser(currentUser); // Set the logged-in user
    }
  }, [navigation]);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Log the user out from Firebase
      Alert.alert("Success", "You have been logged out.");
      navigation.replace("Login"); // Navigate to Login screen
    } catch (error) {
      Alert.alert("Error", "There was an error logging out.");
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="Search..." />
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.icon}>🚪</Text> {/* Logout Icon */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome, {user ? user.displayName || "User" : "Guest"}!</Text>
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
              source={require("../assets/logo.png")}
              style={styles.carImage}
            />
            <Text style={styles.carName}>Car 1</Text>
          </View>
          <View style={styles.featuredCar}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.carImage}
            />
            <Text style={styles.carName}>Car 2</Text>
          </View>
          <View style={styles.featuredCar}>
            <Image
              source={require("../assets/logo.png")}
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
  welcomeSection: {
    padding: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
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
