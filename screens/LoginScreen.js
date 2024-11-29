import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase Authentication
import { auth } from '../firebaseConfig'; // Firebase authentication instance

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle login with Firebase Authentication
  const handleLogin = async () => {
    if (!email || !password) {
      // Show an alert if any field is empty
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      // Use Firebase's signInWithEmailAndPassword to validate credentials
      await signInWithEmailAndPassword(auth, email, password);
      
      // If successful, navigate to the Home screen
      Alert.alert("Success", "You are logged in!", [
        {
          text: "OK",
          onPress: () => navigation.replace("Home"), // Navigate to Home screen
        },
      ]);
    } catch (error) {
      // Handle errors (e.g., invalid credentials, network issues)
      let errorMessage = error.message;

      if (error.code === "auth/user-not-found") {
        errorMessage = "No account found for this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      }

      Alert.alert("Error", errorMessage); // Display the error message
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.subtitle}>Welcome Back!</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link to Signup */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', // Baby Blue Background
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: -15,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF', // Nice Blue Color for Buttons
    padding: 15,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 15,
    color: '#007BFF',
    fontSize: 16,
  },
});

export default LoginScreen;
