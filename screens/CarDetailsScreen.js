import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CarDetailsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/car3.png')} // Replace with a generic car image
        style={styles.carImage}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>SUV - Toyota Highlander</Text>
        <Text style={styles.price}>Price: $30,000</Text>
        <Text style={styles.sectionTitle}>Key Features:</Text>
        <Text style={styles.features}>
          - Spacious interior with 7 seats{'\n'}
          - Advanced safety features{'\n'}
          - All-wheel drive{'\n'}
          - Hybrid fuel efficiency
        </Text>

        <Text style={styles.sectionTitle}>Specifications:</Text>
        <Text style={styles.features}>
          - Engine: 2.5L 4-Cylinder{'\n'}
          - Horsepower: 243 HP{'\n'}
          - Fuel Economy: 36 MPG{'\n'}
          - Towing Capacity: 3,500 lbs
        </Text>

        <Text style={styles.sectionTitle}>Why Choose This Car?</Text>
        <Text style={styles.features}>
          The Toyota Highlander is a perfect blend of comfort, performance, and technology. Its spacious interior is great for families, while the hybrid engine ensures efficiency on the road.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#007BFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  features: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555',
  },
  backButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CarDetailsScreen;
