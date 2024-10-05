import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image,ActivityIndicator, Alert} from 'react-native';
import { useNavigation , NavigationContainer} from '@react-navigation/native';
import UI from './UI';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setUserInfo} from '../store/userSlice'




const LoginSignupScreen = () => {
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  // const auth=useContext(AuthContext)
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'All Your Base Are Belong To Us',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const handlePress = async(e) => {
    // Handle login/signup button press
    e.preventDefault()
    
    if (isSignup) {

      try{
         setIsLoading(true);
          const response = await axios.post('********.amazonaws.com/register',{
          name,
          email,
          password
        })
        const emailReg = await axios.post('********.amazonaws.com/subscribe',{
          
        })
          dispatch(setUserInfo({name,email}));
          setNameemail('')
          setEmail('')
          setPassword('')
          setIsLoading(false);
          navigation.replace ('UI');        
      }catch(err){
        console.log(err);
        Alert.alert('Error Login', err);
      }
      
    }else {
      // Handle login logic
      try{
        setIsLoading(true);
        const response = await axios.post(' https://8o2p8jr1ge.execute-api.ap-south-1.amazonaws.com/login',{
            name,
            email,
            password
        })
          dispatch(setUserInfo({name,email}))
          setName('')
          setEmail('')
          setPassword('')
          console.log(response);
          setIsLoading(false);
          navigation.replace ('UI');
      }catch(err){
        console.log(err);
        Alert.alert('Error Login', err)
      }
      
    }


  };


  return (
       
    <View style={styles.container}>
    <Image source={require('../assets/logo-png.png')} style={styles.image} />
      <Text style={styles.header}>{isSignup ? 'Sign up' : 'Log in'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{isSignup ? 'Sign up' : 'Log in'}</Text>
      </TouchableOpacity>

      {/* //For Switching */}
      <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
        <Text style={styles.switchText}>
          {isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
        </Text>
      </TouchableOpacity>

      <ActivityIndicator animating={isLoading} />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#BD2949',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#BD2949',
    marginTop: 20,
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 5
  }

});

export default LoginSignupScreen;
