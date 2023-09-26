import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { DATA } from "./data";
import Row from "./row";

export default function  App(){

    const renderItem = ({item}) => (
        <Text key = {item.id}>{item.firstname} {item.lastname} </Text>
    )

    return(
        <SafeAreaView>
            <FlatList
            data={DATA}
            renderItem={({item}) => (
                <Row person={item}/>
            )}>

            </FlatList>
        </SafeAreaView>
    );

}/*
function renderItem({item}){
    return (<Text>{item.lastname}</Text>);
}*/
const renderItem = ({item}) => (
    <Text>{item.lastname}, {item.firstname} </Text>
);
