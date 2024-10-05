import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';
import colors from '../util/colors'; // Assuming you have a colors file
import LoginSignupScreen from './LoginSignupScreen';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const { name, email } = useSelector((state) => state.user);
  console.log(name,email);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
    navigation.replace('./LoginSignupScreen.js'); // Replace with your actual login/signup screen
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo-png.png')} 
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary, // Your primary background color
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
    borderColor: '#fff',
    borderWidth: 3,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#FF9C01', // Assuming you have an accent color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});