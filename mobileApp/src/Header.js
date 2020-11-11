import React from 'react';
import { StyleSheet, View, ScrollView, Button, Text } from 'react-native';
import ArrowButton from './ArrowButton';

export default function SchedulePage() {



  return (
      <View style={style.header}>
        <View style={style.top}></View>
        <View style={style.headerTop}>
          <Text style={style.headerText}>Schedule</Text>
        </View>
        <View style={style.navigation}>
          <ArrowButton text="button1"/>
          <ArrowButton text="button2"/>
          <ArrowButton text="button3"/>
        </View>
      </View>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#333",
    width: "100%",
  },
  top: {
    backgroundColor: 'aqua',
    padding: 10,
  },
  headerTop: {
    backgroundColor: 'darkturquoise',
    padding: 20,
  },
  headerText: {
    fontSize: 40,
    color: 'honeydew',
    textAlign: 'left'
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "gainsboro",
    paddingBottom: 10,
    paddingTop: 10
  }
});