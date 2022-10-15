import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { Linking } from 'react-native';
import { ActivityIndicator } from "react-native";

export default function App() {
    //var onChangeText
    var t
    const [onChangeText, setText] = React.useState(0);

    return (

      <View style = { styles.container } >

          <Text>{onChangeText}</Text>
          <Button color = { '#bdc3c7' }
            onPress = {() => {
                setText(onChangeText + 1)
            }
        }
        title = "Count " / >
        <Button color = { '#bdc3c7' }
            onPress = {() => {
                navigation.navigate('testScreen')
            }
        }
        title = "Go to Main Screen " / >

        <StatusBar style = "auto" / >
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
