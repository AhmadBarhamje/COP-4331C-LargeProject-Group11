import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableNativeFeedback, Alert, View, SafeAreaView, Image, Button } from 'react-native';


export default function Card(props) {

  return (
    <View style={style.card}> 
      <View style={style.side}/>
      <View style={style.text}>
        <Text style={style.textName}>
          {props.name}
        </Text>

            <Text style={style.textTime}>
            {'Start Time: ' + props.start + '\n'}
            {'End Time: ' + props.end + '\n'}
            </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    height: 150,
    borderRadius: 15,
    margin: 0,
    paddingLeft: 0,
    paddingBottom: 2,
    flexDirection: 'row'
  },
  text: {
    flexDirection: "column",
    paddingRight: 100
  },
  textName: {
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    fontSize: 25,
    paddingLeft: 5,
  },
  textTime: {
    color: "black",
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 0,
  },
  side: {
    padding: 5,
    backgroundColor: "lightgrey",
  }
}); 