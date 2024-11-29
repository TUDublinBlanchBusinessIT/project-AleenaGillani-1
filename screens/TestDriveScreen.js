import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Alert, Picker } from 'react-native';

const TestDriveScreen = () => {
  // State variables for input fields and selected options
  const [model, setModel] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactPreference, setContactPreference] = useState('Email');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleBooking = () => {
    // Validation
    if (!model || !name || !email || !phone) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!agreedToTerms) {
      Alert.alert('Error', 'You must agree to the terms and policy.');
      return;
    }

    // Success alert
    Alert.alert('Success', `Your test drive for the ${model} has been booked!`, [
      { text: 'OK' },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Test Drive</Text>

      {/* Car Model Selection (Dropdown) */}
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Car Model Selection */}
      <Text style={styles.label}>Select Car Model</Text>
      <Picker
        selectedValue={model}
        style={styles.picker}
        onValueChange={(itemValue) => setModel(itemValue)}
      >
        <Picker.Item label="Select a Model" value="" />
        <Picker.Item label="SUV" value="SUV" />
        <Picker.Item label="Sedan" value="Sedan" />
        <Picker.Item label="Coupe" value="Coupe" />
        <Picker.Item label="Convertible" value="Convertible" />
      </Picker>

      {/* Preferred Contact Method (Dropdown) */}
      <Text style={styles.label}>How would you like us to contact you?</Text>
      <Picker
        selectedValue={contactPreference}
        style={styles.picker}
        onValueChange={(itemValue) => setContactPreference(itemValue)}
      >
        <Picker.Item label="Email" value="Email" />
        <Picker.Item label="Phone" value="Phone" />
      </Picker>

      {/* Terms and Conditions Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={agreedToTerms}
          onValueChange={setAgreedToTerms}
        />
        <Text style={styles.checkboxLabel}>
          I agree to the terms and policy
        </Text>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
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
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    fontSize: 14,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TestDriveScreen;
