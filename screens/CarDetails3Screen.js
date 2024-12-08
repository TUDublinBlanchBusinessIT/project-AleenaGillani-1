import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CarDetails3Screen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Image source={require('../assets/img3.png')} style={styles.carImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>BMW X5</Text>
        <Text style={styles.description}>
          The BMW X5 is a luxury SUV that combines power, style, and advanced technology.
          Designed for those who demand performance and elegance, it offers a premium driving experience.
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features:</Text>
          <Text style={styles.text}>
            - Engine: 3.0L Twin-Turbo Inline-6{'\n'}
            - Fuel Economy: 21 MPG (city), 26 MPG (highway)
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
  container: { flex: 1, backgroundColor: '#f0f8ff' },
  contentContainer: { paddingBottom: 20 },
  carImage: { width: '100%', height: 250, resizeMode: 'cover' },
  detailsContainer: { padding: 20, backgroundColor: '#fff', borderRadius: 10, margin: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  description: { fontSize: 16, color: '#555', marginBottom: 15, lineHeight: 24 },
  section: { marginTop: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#007BFF', marginBottom: 5 },
  text: { fontSize: 16, color: '#333', lineHeight: 22 },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default CarDetails3Screen;
