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

  getDates(startDate) {
    let aryDates = [];

    for (let i = 0; i <= 7; i++) {
        let currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(this.DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + this.MonthAsString(currentDate.getMonth()));
    }

    return aryDates;
}

  MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[monthIndex];
  }

 DayAsString(dayIndex) {
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  return weekdays[dayIndex];
}

  render() {
    return (
    <View style={style.pageStyle}>
      <ScrollView>
        <Text style={style.text}>{this.getDates(new Date())[0]}</Text>
        <Card name={Shawn.name} start={Shawn.start} end={Shawn.end}/>
        <Card name={Jon.name} start={Jon.start} end={Jon.end}/>
        <Card name={sb.name} start={sb.start} end={sb.end}/>
        <Card name={st.name} start={st.start} end={st.end}/>
        <Card name={sandy.name} start={sandy.start} end={sandy.end}/>
        <Card name={larry.name} start={larry.start} end={larry.end}/>
        <Card name={krabs.name} start={krabs.start} end={krabs.end}/>
        <Card name={patrick.name} start={patrick.start} end={patrick.end}/>

        <Text style={style.text}>{this.getDates(new Date())[1]}</Text>
        <Card name={Shawn.name} start={Shawn.start} end={Shawn.end}/>
        <Card name={Jon.name} start={Jon.start} end={Jon.end}/>
        <Card name={sb.name} start={sb.start} end={sb.end}/>
        <Card name={st.name} start={st.start} end={st.end}/>
        <Card name={sandy.name} start={sandy.start} end={sandy.end}/>
        <Card name={larry.name} start={larry.start} end={larry.end}/>
        <Card name={krabs.name} start={krabs.start} end={krabs.end}/>
        <Card name={patrick.name} start={patrick.start} end={patrick.end}/>

        
        <Text style={style.text}>{this.getDates(new Date())[2]}</Text>
        <Card name={Shawn.name} start={Shawn.start} end={Shawn.end}/>
        <Card name={Jon.name} start={Jon.start} end={Jon.end}/>
        <Card name={sb.name} start={sb.start} end={sb.end}/>
        <Card name={st.name} start={st.start} end={st.end}/>
        <Card name={sandy.name} start={sandy.start} end={sandy.end}/>
        <Card name={larry.name} start={larry.start} end={larry.end}/>
        <Card name={krabs.name} start={krabs.start} end={krabs.end}/>
        <Card name={patrick.name} start={patrick.start} end={patrick.end}/>

        
        <Text style={style.text}>{this.getDates(new Date())[3]}</Text>
        <Card name={Shawn.name} start={Shawn.start} end={Shawn.end}/>
        <Card name={Jon.name} start={Jon.start} end={Jon.end}/>
        <Card name={sb.name} start={sb.start} end={sb.end}/>
        <Card name={st.name} start={st.start} end={st.end}/>
        <Card name={sandy.name} start={sandy.start} end={sandy.end}/>
        <Card name={larry.name} start={larry.start} end={larry.end}/>
        <Card name={krabs.name} start={krabs.start} end={krabs.end}/>
        <Card name={patrick.name} start={patrick.start} end={patrick.end}/>

        
        <Text style={style.text}>{this.getDates(new Date())[4]}</Text>
        <Card name={Shawn.name} start={Shawn.start} end={Shawn.end}/>
        <Card name={Jon.name} start={Jon.start} end={Jon.end}/>
        <Card name={sb.name} start={sb.start} end={sb.end}/>
        <Card name={st.name} start={st.start} end={st.end}/>
        <Card name={sandy.name} start={sandy.start} end={sandy.end}/>
        <Card name={larry.name} start={larry.start} end={larry.end}/>
        <Card name={krabs.name} start={krabs.start} end={krabs.end}/>
        <Card name={patrick.name} start={patrick.start} end={patrick.end}/>

        
        <Text style={style.text}>{this.getDates(new Date())[5]}</Text>
        <Card name={Shawn.name} start={Shawn.start} end={Shawn.end}/>
        <Card name={Jon.name} start={Jon.start} end={Jon.end}/>
        <Card name={sb.name} start={sb.start} end={sb.end}/>
        <Card name={st.name} start={st.start} end={st.end}/>
        <Card name={sandy.name} start={sandy.start} end={sandy.end}/>
        <Card name={larry.name} start={larry.start} end={larry.end}/>
        <Card name={krabs.name} start={krabs.start} end={krabs.end}/>
        <Card name={patrick.name} start={patrick.start} end={patrick.end}/>

        
        <Text style={style.text}>{this.getDates(new Date())[6]}</Text>
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
    margin: 10,
    backgroundColor: 'azure'
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
  start: "7:00 AM",
  end: "11:00 AM",
}
const Jon = {
  name: "Jon Snow",
  start: "7:30 AM",
  end: "9:00 AM",
}
const sb = {
  name: "Spongebob Squarepants",
  start: "8:00 AM",
  end: "4:00 PM",
}
const st = {
  name: "Squidward ",
  start: "9:00 AM",
  end: "5:00 PM",
}
const sandy = {
  name: "Sandy Cheeks",
  start: "9:00 AM",
  end: "3:00 PM",
}
const larry = {
  name: "Larry Lobster",
  start: "9:00 AM",
  end: "5:00 PM",
}
const krabs = {
  name: "Mr Krabs",
  start: "12:00 PM",
  end: "12:00 AM",
}
const patrick = {
  name: "Patrick Star",
  start: "5:00 PM",
  end: "6:00 PM",
}