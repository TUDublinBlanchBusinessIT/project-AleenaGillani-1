import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CarDetails1Screen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/car3.png')} style={styles.carImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Toyota Highlander</Text>
        <Text style={styles.description}>
          The Toyota Highlander is a versatile SUV designed for families and adventurers alike.
          Combining comfort, safety, and hybrid efficiency, it’s the perfect choice for both city
          driving and road trips.
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features:</Text>
          <Text style={styles.text}>
            - Engine: Hybrid 2.5L 4-cylinder{'\n'}
            - Seating: Up to 7 passengers{'\n'}
            - Fuel Economy: 36 MPG (city), 35 MPG (highway){'\n'}
            - Technology: 12.3-inch touchscreen, Apple CarPlay, Android Auto, JBL Audio
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Specifications:</Text>
          <Text style={styles.text}>
            - Horsepower: 243 HP{'\n'}
            - Torque: 175 lb-ft{'\n'}
            - Top Speed: 112 MPH{'\n'}
            - Towing Capacity: 3,500 lbs
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Features:</Text>
          <Text style={styles.text}>
            - Toyota Safety Sense 2.5{'\n'}
            - Blind Spot Monitoring{'\n'}
            - 8 Airbags{'\n'}
            - Adaptive Cruise Control
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price:</Text>
          <Text style={styles.text}>
            - Base Price: $36,000{'\n'}
            - Taxes and Fees: $3,500{'\n'}
            - Total: $39,500{'\n'}
            - Discounts: $2,000 off for first-time buyers
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TestDrive')}>
          <Text style={styles.buttonText}>Book a Test Drive</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  carImage: { width: '100%', height: 250, resizeMode: 'cover' },
  detailsContainer: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 22, color: '#555' },
  section: { marginTop: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, lineHeight: 24, color: '#333' },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default CarDetails1Screen;
