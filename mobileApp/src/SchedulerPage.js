import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button, Text } from 'react-native';
import Card from './Card';
import Header from './Header';

export class SchedulePage extends Component {
  constructor(props) {
      super(props)
  }

  addCard(name, startTime, endTime) {
    return <Card name={name} start={startTime} end={endTime}></Card>
  };

  render() {
    return (
    <View style={style.pageStyle}>
      <Header>
      </Header>
      <ScrollView>
      <Text style={style.text}>{date.day + ', ' + date.month + ' ' + date.date}</Text>
        <Card name={Shawn.name} start={Shawn.start} end={Shawn.end}/>
        <Card name={Jon.name} start={Jon.start} end={Jon.end}/>
        <Card name={sb.name} start={sb.start} end={sb.end}/>
        <Card name={st.name} start={st.start} end={st.end}/>
        <Card name={sandy.name} start={sandy.start} end={sandy.end}/>
        <Card name={larry.name} start={larry.start} end={larry.end}/>
        <Card name={krabs.name} start={krabs.start} end={krabs.end}/>
        <Card name={patrick.name} start={patrick.start} end={patrick.end}/>

      </ScrollView>
    </View>
    )}
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();

const date =
{
     day: weekday[d.getDay()],
     month: monthNames[d.getMonth()],
     date: new Date().getDate(),
};

const style = StyleSheet.create({
  pageStyle: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection: "column",
      justifyContent: "center", // main axis
      alignItems: "center", // secondary axis
  },
  text:{
    textAlign: "center",
    flex: 1,
    fontSize: 40,
    color: "black",
    margin: 10
  },
  button: {
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: 'red',
    paddingLeft: 10,
    paddingRight: 10
  },
});

const Shawn = {
  name: "Shawn McChargue",
  start: "7:00",
  end: "11:00",
}
const Jon = {
  name: "Jon Snow",
  start: "7:30",
  end: "9:00",
}
const sb = {
  name: "Spongebob Squarepants",
  start: "8:00",
  end: "4:00",
}
const st = {
  name: "Squidward ",
  start: "9:00",
  end: "5:00",
}
const sandy = {
  name: "Sandy Cheeks",
  start: "9:00",
  end: "3:00",
}
const larry = {
  name: "Larry Lobster",
  start: "9:00",
  end: "5:00",
}
const krabs = {
  name: "Mr Krabs",
  start: "12:00",
  end: "12:00",
}
const patrick = {
  name: "Patrick Star",
  start: "5:00",
  end: "6:00",
}