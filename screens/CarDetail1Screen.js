import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CarDetails1Screen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/car3.png')} style={styles.carImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Car 1 - Toyota Highlander</Text>
        <Text style={styles.price}>Price: $30,000</Text>
        <Text style={styles.sectionTitle}>Features:</Text>
        <Text style={styles.features}>
          - Spacious interior{'\n'}
          - Hybrid engine{'\n'}
          - Advanced safety features
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  carImage: { width: '100%', height: 200, resizeMode: 'cover' },
  detailsContainer: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 18, color: '#007BFF', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  features: { fontSize: 16, lineHeight: 22 },
});

export default CarDetails1Screen;
