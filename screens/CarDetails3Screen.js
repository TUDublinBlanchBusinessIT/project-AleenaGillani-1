import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CarDetails3Screen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/img3.png')} style={styles.carImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>BMW X5</Text>
        <Text style={styles.description}>
          The BMW X5 is a luxury SUV that combines power, style, and advanced technology. Designed for those who demand performance and elegance, it offers a premium driving experience with unmatched comfort.
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features:</Text>
          <Text style={styles.text}>
            - Engine: 3.0L Twin-Turbo Inline-6{'\n'}
            - Seating: 5 passengers{'\n'}
            - Fuel Economy: 21 MPG (city), 26 MPG (highway){'\n'}
            - Technology: 12.3-inch iDrive Display, Gesture Control, Harman Kardon Sound System
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Specifications:</Text>
          <Text style={styles.text}>
            - Horsepower: 335 HP{'\n'}
            - Torque: 331 lb-ft{'\n'}
            - Top Speed: 155 MPH{'\n'}
            - Acceleration: 0-60 in 5.3 seconds
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Features:</Text>
          <Text style={styles.text}>
            - Adaptive Cruise Control with Stop-and-Go{'\n'}
            - Parking Assistance Plus{'\n'}
            - Surround View Camera System{'\n'}
            - Active Blind Spot Detection
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Luxury Highlights:</Text>
          <Text style={styles.text}>
            - Leather Upholstery{'\n'}
            - Panoramic Sunroof{'\n'}
            - 4-Zone Climate Control{'\n'}
            - Ambient Lighting
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price:</Text>
          <Text style={styles.text}>
            - Base Price: $60,000{'\n'}
            - Taxes and Fees: $5,500{'\n'}
            - Total: $65,500{'\n'}
            - Discounts: $2,500 loyalty discount
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TestDrive')}>
          <Text style={styles.buttonText}>Book a Test Drive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Explore Financing Options</Text>
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
  buttonSecondary: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonSecondaryText: { color: '#555', fontWeight: 'bold', fontSize: 16 },
});

export default CarDetails3Screen;
