import React from 'react';
import {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import NavBar from './app_componets/nav';
import Event from './app_componets/events';
import axios from 'axios';
 const App = () =>{
  const [events, setEvents] = useState([1,2,3,4,5,6]);

  const getEvents = () =>{
    axios.get('https://waveli-coding-challenge.herokuapp.com/events/').then(data=>{
      console.log(data);
    }).catch(error=>{
      console.log(error.message);
    })
  }
  return (
    <View style={styles.container} onClick = {()=>{getEvents()}}>
      <NavBar/>
      {/* EVENTS */}
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
