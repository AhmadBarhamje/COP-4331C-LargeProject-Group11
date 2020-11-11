import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableNativeFeedback, Alert, View, SafeAreaView, Image, Button } from 'react-native';


export default function Card(props) {

  const Shawn = {
    name: "Shawn McChargue",
    start: "7:00",
    end: "11:00",
  }

  return (
    <View style={style.card}> 
      <View style={style.side}/>
      <Text style={style.text}>
        {props.name + '\n'}
        {'Start Time: ' + props.start + '\n'}
        {'End Time: ' + props.end + '\n'}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    height: 150,
    borderRadius: 15,
    margin: 5,
    padding: 20,
    flexDirection: 'row'
  },
  text: {
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    fontSize: 25,
    
  },
  side: {
    padding: 5,
    backgroundColor: "lightgrey",
  }
});