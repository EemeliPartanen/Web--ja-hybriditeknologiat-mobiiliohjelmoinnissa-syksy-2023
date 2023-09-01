import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  
  const[age, setAge] = useState(0);
  const[hr, setHr1] = useState(0);
  const[hr2, setHr2] = useState(0);


  function change(text) {
    setAge(text);
    const calculatea = (220-age) * 0.65 
    const calculateb = (220-age) * 0.85
    setHr1(calculatea.toFixed(0))
    setHr2(calculateb.toFixed(0))
  }

  return(
    <View style={styles.container}>

    <Text>Age</Text>
    <TextInput
    placeholder='Insert Age'
    value={age}
    onChangeText={text => change(text)}
    keyboardType='decimal-pad'/>
    <Text>Hr</Text>
    <Text>{hr + " - " + hr2}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    marginLeft:50,
    marginRight:50,
    marginBottom:150,


  },

});