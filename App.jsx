import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Home from './src/components/Home';
import Profile from './src/components/Profile';
import { createStaticNavigation } from '@react-navigation/native';

export default function App() {
  const Stack = createStaticNavigation()

  const StackNavigator = ()=>{
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    )
  }


  return (
    <SafeAreaView>
      <View>
       <StackNavigator/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 50,
    // borderColor:'black',
    borderWidth: 1,
    borderRadius: 5,
    
  },
});
