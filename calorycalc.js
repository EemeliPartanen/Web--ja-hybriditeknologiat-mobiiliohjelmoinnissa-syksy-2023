import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';


export default function App(){
    const [weight, setWeight] = useState(0);
    const [intensity, setIntensity] = useState(1.3);
    const [gender, setGender] = useState('male');
    const [calories, setCalories] = useState(0)

    const intensities=Array();
    intensities.push({label: 'light', value:1.3});
    intensities.push({label: 'usual', value:1.5});
    intensities.push({label: 'moderate', value:1.7});
    intensities.push({label: 'hard', value:2});
    intensities.push({label: 'very hard', value:2.2});

    const genders = [
        {label: 'Male', value:'male'},
        {label: 'Female', value:'female'}
    ]
    
    return(
        <View style={styles.container}>
            <View style={styles.field}>
                <Text> Weight</Text>
                <TextInput
                style={styles.input}
                onChangeText={text => setWeight(text)}
                placeholder='in kilograms'
                keyboardType='numeric'></TextInput>
        </View>
        <View style={styles.field}>
            <Text>Intensity</Text>
            <Picker style={styles.intesity}
            onValueChange={(itemValue) => setIntensity(itemValue)}
            selectedValue={intensity}
            >
                {intensities.map((intesity,index) => (
                    <Picker.Item key={index} label={intesity.label} value={intesity.value}/>
                ))
                }
            </Picker>
        </View>
        <View style={styles.field}>
            <Text>Gender</Text>
            <RadioForm
            style={styles.radio}
            buttonSize = {10}
            radio_props={genders}
            initial={0}
            onPress={(value) => {setGender(value)}}
            />
            <Text>{calories.toFixed(0)} </Text>
        </View>
        <Button onPress={calculate} title='Calculate'></Button>

        </View>

        
    );
function calculate(){
      let result = 0;
      if (gender === 'male') {
          result = (879 + 10.2 * weight) * intensity;
      }
      else {
          result = (795 + 7.18 * weight) * intensity;
      }
      setCalories(result)
  }
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 30,
    },
    field:{
        margin:10,
    },
    input:{
        marginLeft:10,
    },
    radio:{
        marginTop:10,
        margonBottom:10,
    }

});
