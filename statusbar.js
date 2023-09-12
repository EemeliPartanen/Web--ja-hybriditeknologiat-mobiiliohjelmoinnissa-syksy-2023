import { Platform, SafeAreaView,StyleSheet, Text, StatusBar} from "react-native";
import Constants from 'expo-constants'

export default function app() {
    return(
        <SafeAreaView style= {styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto"
            backgroundColor="blue"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    }
})