import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Event = (props) =>{
    return(
        <View style={styles.container}>
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.eventPicture} />
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the button below!
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Read More</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Event;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop : "15px",
      marginBottom : "15px",
    },
    eventPicture: {
      width: 305,
      height: 159,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 8,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
    },
  });
  