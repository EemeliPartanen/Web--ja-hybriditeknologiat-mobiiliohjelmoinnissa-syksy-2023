import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
export default function App() {

    const [euros, setEuros] = useState('')
    const [krona, setKrona] = useState(0)
    const calculate = () => {
  
      const result = euros.replace(',','.') * 11.85
      setKrona(result)
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.field}>Euros</Text>
        <TextInput
         placeholder='Enter Money'
         keyboardType='decimal-pad'
         value={euros}
         onChangeText={text => setEuros(text)}
         style={styles.field}
         />
         <Text style={styles.field}>Krona</Text>
         <Text style={styles.field}>{krona.toFixed(2)}</Text>
         <Button title='Calculate' onPress={calculate}/>
       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:50,
      marginLeft:10,
      marginRight:10,
  
    },
    field:{
      marginBottom:10,
    }
  });