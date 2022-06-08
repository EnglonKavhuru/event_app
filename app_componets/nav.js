import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const NavBar = (props) =>{
    return(
        <View style = {navStyles.navbar}>
            <Text style = {navStyles.item}>News</Text>
            <Text  style = {navStyles.item}>News</Text>
            <Text  style = {navStyles.item}>News</Text>
        </View>
    )
}

export default NavBar;

const navStyles = StyleSheet.create({
    item: {
      width: '25%',
      marginLeft : "18%"
    },
    navbar: {
      width: '100%',
      display : "block",
      marginTop : "15px",
    }
  });