import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  // const theme = useColorScheme();
  // const isdarkMode = theme === 'dark';
  // const backgroundColor = isdarkMode?"black":"white"

  const [text, SetText] = useState('');
  const [submit,SetSubmit] = useState('')

  const handleSubmit = ()=>{
    SetSubmit(text)
    SetText('')
  }

  return (
    <SafeAreaView
      style={{
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <TextInput
          placeholder="enter ur name"
          value={text}
          style={styles.input}
          onChangeText={(value)=>SetText(value)}
        />
      </View>
      <Button title="submit" onPress={handleSubmit}></Button>

      {submit ? <Text style={{marginTop: 20}}>Result: {submit}</Text> : null}
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
