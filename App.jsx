import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function App() {
  // const theme = useColorScheme();
  // const isdarkMode = theme === 'dark';
  // const backgroundColor = isdarkMode?"black":"white"

  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder='enter ur name' style={StyleSheet.input}/>
      </View>
      <Button title='submit'></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    input:{
      width:"100%",
      padding:5,
      borderWidth:1,
      borderRadius:5
    }
});
