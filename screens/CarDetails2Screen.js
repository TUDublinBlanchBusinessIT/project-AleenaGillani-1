import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CarDetails2Screen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/img2.png')} style={styles.carImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Honda Civic</Text>
        <Text style={styles.description}>
          The Honda Civic is a sporty and fuel-efficient sedan known for its reliability and innovative design. Perfect for commuters and anyone seeking a stylish ride with advanced technology.
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features:</Text>
          <Text style={styles.text}>
            - Engine: 2.0L 4-cylinder or Turbocharged 1.5L{'\n'}
            - Seating: 5 passengers{'\n'}
            - Fuel Economy: 31 MPG (city), 40 MPG (highway){'\n'}
            - Technology: 7-inch Display, HondaLink, Apple CarPlay, Android Auto
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Specifications:</Text>
          <Text style={styles.text}>
            - Horsepower: 180 HP{'\n'}
            - Torque: 162 lb-ft{'\n'}
            - Top Speed: 125 MPH{'\n'}
            - Acceleration: 0-60 in 6.7 seconds
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Features:</Text>
          <Text style={styles.text}>
            - Lane Keeping Assist{'\n'}
            - Emergency Braking{'\n'}
            - Adaptive Cruise Control{'\n'}
            - 6 Airbags
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price:</Text>
          <Text style={styles.text}>
            - Base Price: $24,000{'\n'}
            - Taxes and Fees: $2,200{'\n'}
            - Total: $26,200{'\n'}
            - Discounts: $1,000 loyalty discount
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

export default CarDetails2Screen;
