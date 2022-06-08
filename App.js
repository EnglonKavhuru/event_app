import React from 'react';
import {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import NavBar from './app_componets/nav';
import Event from './app_componets/events';

 const App = () =>{
  const [events, setEvents] = useState([1,2,3,4,5,6])
  return (
    <View style={styles.container}>
      <NavBar/>
      {
        events.map(event =><Event/>)
      }
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
