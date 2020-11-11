import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, } from 'react-native';

export default function ArrowButton({ text, btnFunction})
{
    return (
        <TouchableOpacity onPress={btnFunction}>
            <View style={StyleSheet.button}>
                <Text styles={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 30,
        textAlign: 'center'
    }
});