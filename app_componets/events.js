import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Event = (props) =>{
    return(
        <View style={styles.container}>
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.eventPicture} />
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the button below!
            </Text>

            <View style={styles.buttonLayout}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Read More</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.outLine}>
                    <Text style={styles.outLineText}>I am interested</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    buttonLayout : {
      display: 'block',
      width : "100%"
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
      width : "110px",
      backgroundColor: '#386641',
      padding: 8,
      borderRadius: 6,
    },
    row : {
      width : "50%"
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
    },
    outLine : {
      width : "100px",
      borderWidth : 1,
      borderColor: "#386641",
      borderRadius: 6
    },
    outLineText : {
      paddingLeft: "2px",
      paddingTop: "6px",
      paddingBottom: "6px",
      color : "#386641"
    }
  });
  

  