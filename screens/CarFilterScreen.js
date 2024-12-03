import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Picker,
} from 'react-native';

const carData = [
  { id: '1', model: 'SUV', price: 30000, fuel: 'Gasoline', brand: 'Toyota' },
  { id: '2', model: 'Sedan', price: 20000, fuel: 'Diesel', brand: 'Honda' },
  { id: '3', model: 'Coupe', price: 35000, fuel: 'Electric', brand: 'Tesla' },
  { id: '4', model: 'Convertible', price: 40000, fuel: 'Gasoline', brand: 'BMW' },
  { id: '5', model: 'SUV', price: 45000, fuel: 'Electric', brand: 'Tesla' },
];

const CarFilterScreen = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [filteredCars, setFilteredCars] = useState(carData);

  const applyFilters = () => {
    let filtered = carData;

    if (selectedModel) {
      filtered = filtered.filter((car) => car.model === selectedModel);
    }

    if (maxPrice) {
      filtered = filtered.filter((car) => car.price <= parseInt(maxPrice, 10));
    }

    if (fuelType) {
      filtered = filtered.filter((car) => car.fuel === fuelType);
    }

    setFilteredCars(filtered);
  };

  const clearFilters = () => {
    setSelectedModel('');
    setMaxPrice('');
    setFuelType('');
    setFilteredCars(carData);
  };

  const renderCarItem = ({ item }) => (
    <View style={styles.carItem}>
      <Text style={styles.carTitle}>{item.brand} {item.model}</Text>
      <Text style={styles.carDetails}>Price: ${item.price}</Text>
      <Text style={styles.carDetails}>Fuel Type: {item.fuel}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Cars</Text>

      {/* Model Selection */}
      <Text style={styles.label}>Select Model</Text>
      <Picker
        selectedValue={selectedModel}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedModel(itemValue)}
      >
        <Picker.Item label="All Models" value="" />
        <Picker.Item label="SUV" value="SUV" />
        <Picker.Item label="Sedan" value="Sedan" />
        <Picker.Item label="Coupe" value="Coupe" />
        <Picker.Item label="Convertible" value="Convertible" />
      </Picker>

      {/* Max Price Input */}
      <Text style={styles.label}>Max Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter max price"
        value={maxPrice}
        onChangeText={setMaxPrice}
        keyboardType="numeric"
      />

      {/* Fuel Type Selection */}
      <Text style={styles.label}>Select Fuel Type</Text>
      <Picker
        selectedValue={fuelType}
        style={styles.picker}
        onValueChange={(itemValue) => setFuelType(itemValue)}
      >
        <Picker.Item label="All Fuel Types" value="" />
        <Picker.Item label="Gasoline" value="Gasoline" />
        <Picker.Item label="Diesel" value="Diesel" />
        <Picker.Item label="Electric" value="Electric" />
      </Picker>

      {/* Filter Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={applyFilters}>
          <Text style={styles.buttonText}>Apply Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={clearFilters}>
          <Text style={styles.buttonText}>Clear Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Filtered Cars List */}
      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  buttonSecondary: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    marginTop: 20,
  },
  carItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carDetails: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default CarFilterScreen;
