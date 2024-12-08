import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';

const EditBookingScreen = ({ route, navigation }) => {
  const { bookingId } = route.params;
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const docRef = doc(firestore, 'test_drives', bookingId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBooking({ id: docSnap.id, ...docSnap.data() });
        } else {
          Alert.alert('Error', 'Booking not found.');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch booking details.');
        console.error('Error fetching document:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingId]);

  const handleUpdate = async () => {
    if (!booking) return;

    try {
      const docRef = doc(firestore, 'test_drives', bookingId);

      if (!booking.name || !booking.email || !booking.phone || !booking.model) {
        Alert.alert('Error', 'All fields are required.');
        return;
      }

      await updateDoc(docRef, {
        name: booking.name,
        email: booking.email,
        phone: booking.phone,
        model: booking.model,
        contactPreference: booking.contactPreference,
      });

      Alert.alert('Success', 'Booking updated successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to update booking.');
      console.error('Error updating document:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        <View>
          <Text style={styles.title}>Edit Booking</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={booking?.name || ''}
            onChangeText={(text) => setBooking({ ...booking, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={booking?.email || ''}
            onChangeText={(text) => setBooking({ ...booking, email: text })}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={booking?.phone || ''}
            onChangeText={(text) => setBooking({ ...booking, phone: text })}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Car Model"
            value={booking?.model || ''}
            onChangeText={(text) => setBooking({ ...booking, model: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Preference"
            value={booking?.contactPreference || ''}
            onChangeText={(text) =>
              setBooking({ ...booking, contactPreference: text })
            }
          />

          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  scrollContent: {
    padding: 20,
  },
  container: {
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
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default EditBookingScreen;
