import React from 'react';
import { Searchbar } from 'react-native-paper';
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const NavBar = (props) =>{

      const Search = () => {
        const [searchQuery, setSearchQuery] = React.useState('');
      
        const onChangeSearch = query => setSearchQuery(query);
      
        return (
          <Searchbar
            placeholder="Search an event..."
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        );
      };
  
    return(
        <View>
          <View>
            <View style = {navStyles.headers}>Find Something</View>
            <View>
              <Search/>
            </View>
          </View>
          <View style = {navStyles.navbar}>
              <Text style = {navStyles.item}>Events</Text>
              <Text  style = {navStyles.item}>People</Text>
              <Text  style = {navStyles.item}>Groups</Text>
          </View>
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
      marginTop : "20px",
      marginBottom : "20px",
    },
    headers : {
      alignText : "center",
      fontSize : "17px",
      fontWeight: 'bold',
      marginTop : "15px",
      marginBottom : "15px",
    }
  });