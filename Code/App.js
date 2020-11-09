
import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, Button, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={{flex:1}}>

    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text style={styles.baseText}> MusicApp </Text>

      <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5338_-_iTunes-512.png'}}
        style={{width: 100, height: 100, alignSelf: "center"}} />

      <TextInput placeholder= {'Enter your email here...'} placeholderTextColor= {'white'}
      style={{ 
              height: 40,
              borderColor: 'white',
              borderWidth: 1,
              width: 200,
              borderRadius: 20,
              textAlign: 'center'
            }}
      />  

      <Button 
        title="Request"
        onPress={() => alert('Thank you! Check your email.')}
      />

    </View>

    </LinearGradient>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },

  baseText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },


});