import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import GasSense from '../assets/gassense-logo.png';

const LogInSignUp = ({ navigation }) => {
  
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogIn = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={styles.container}>
      <Image source={GasSense} style={styles.logo} />
      <TouchableOpacity
        style={styles.loginbutton}
        onPress={goToLogIn} 
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
          style={styles.signupbutton}
          onPress={goToSignUp} 
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  loginbutton: {
    backgroundColor: '#0B3954',
    paddingVertical: 10,
    paddingHorizontal: 75,
    borderRadius: 50, 
    margin: 30,
    bottom:'6%'
  },
  signupbutton: {
    backgroundColor: '#0B3954',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 50, 
    margin: 10,
    bottom:'7.5%'
  },  
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backLink: {
    fontSize: 16,
    color: '#0B3954',
    fontWeight: 'bold',
    bottom:'300%'
  },
  backLinkContainer: {

  },
});

export default LogInSignUp;