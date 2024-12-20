import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Switch,
    Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { firestore } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const TestDriveScreen = ({ navigation }) => {
    const [model, setModel] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contactPreference, setContactPreference] = useState('Email');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleBooking = async () => {
        if (!model || !name || !email || !phone) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        if (!agreedToTerms) {
            Alert.alert('Error', 'You must agree to the terms and policy.');
            return;
        }

        const bookingData = {
            model,
            name,
            email,
            phone,
            contactPreference,
            agreedToTerms,
            timestamp: new Date(),
        };

        try {
            const docRef = await addDoc(collection(firestore, 'test_drives'), bookingData);
            Alert.alert('Success', `Your test drive for the ${model} has been booked!`, [
                {
                    text: 'OK',
                    onPress: () => navigation.replace('Home'),
                },
            ]);

            setModel('');
            setName('');
            setEmail('');
            setPhone('');
            setContactPreference('Email');
            setAgreedToTerms(false);
        } catch (error) {
            console.error('Error adding document: ', error);
            Alert.alert('Error', 'Failed to book test drive. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Book a Test Drive</Text>

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

            <Text style={styles.label}>How would you like us to contact you?</Text>
            <Picker
                selectedValue={contactPreference}
                style={styles.picker}
                onValueChange={(itemValue) => setContactPreference(itemValue)}
            >
                <Picker.Item label="Email" value="Email" />
                <Picker.Item label="Phone" value="Phone" />
            </Picker>

            <View style={styles.checkboxContainer}>
                <Switch value={agreedToTerms} onValueChange={setAgreedToTerms} />
                <Text style={styles.checkboxLabel}>I agree to the terms and policy</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleBooking}>
                <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Bookings')}
            >
                <Text style={styles.buttonText}>View Bookings</Text>
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
