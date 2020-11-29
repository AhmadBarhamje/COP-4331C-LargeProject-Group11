import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button, Text, Alert } from 'react-native';
import Card from './Card';
import Header from './Header';
import axios from 'axios';
import ArrowButton from './ArrowButton';

let memberList = [
  {Shawn: 
  {
      availability: {sun: Array(48).fill(true), mon: Array(48).fill(true), tue: Array(48).fill(true), wed: Array(48).fill(true), thu: Array(48).fill(true), fri: Array(48).fill(true), sat: Array(48).fill(true)}
  }},
  {Chris: 
  {
      availability: {sun: Array(48).fill(true), mon: Array(48).fill(true), tue: Array(48).fill(true), wed: Array(48).fill(true), thu: Array(48).fill(true), fri: Array(48).fill(true), sat: Array(48).fill(true)}
  }}
];

export class SchedulePage extends Component {
  constructor(props) {
      super(props)

      this.state = {
        currentAvailability: {}
      }

      axios.interceptors.request.use((config) => {
        config.headers['x-auth-token'] = JSON.stringify(this.props.route.params.accessToken);
        config.headers['content-type'] = 'application/json; charset=utf-8';
        return config;
    },
     (error) => {
         Promise.reject(error);
     });

    axios.interceptors.response.use(response => {
      console.log('Response:', JSON.stringify(response, null, 2))
      return response
    })
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
    let d = new Date();
    let month = new Array();
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
  let weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  return weekdays[dayIndex];
}

convertArrayToTimeHelper(timeIndex) {
  let startTime;

  switch(timeIndex)
  {
    case 0:
      startTime = "12:00 AM";
      break;
    case 1:
      startTime = "12:30 AM";
      break;
    case 2:
      startTime = "1:00 AM";
      break;
    case 3:
      startTime = "1:30 AM";
      break;
    case 4:
      startTime = "2:00 AM";
      break;
    case 5:
      startTime = "2:30 AM";
      break;
    case 6:
      startTime = "3:00 AM";
      break;
    case 7:
      startTime = "3:30 AM";
      break;
    case 8:
      startTime = "4:00 AM";
      break;
    case 9:
      startTime = "4:30 AM";
      break;
    case 10:
      startTime = "5:00 AM";
      break;
    case 11:
      startTime = "5:30 AM";
      break;
    case 12:
      startTime = "6:00 AM";
      break;
    case 13:
      startTime = "6:30 AM";
      break;
    case 14:
      startTime = "7:00 AM";
      break;
    case 15:
      startTime = "7:30 AM";
      break;
    case 16:
      startTime = "8:00 AM";
      break;
    case 17:
      startTime = "8:30 AM";
      break;
    case 18:
      startTime = "9:00 AM";
      break;
    case 19:
      startTime = "9:30 AM";
      break;
    case 20:
      startTime = "10:00 AM";
      break;
    case 21:
      startTime = "10:30 AM";
      break;
    case 22:
      startTime = "11:00 AM";
      break;
    case 23:
      startTime = "11:30 AM";
      break;
    case 24:
      startTime = "12:00 PM";
      break;
    case 25:
      startTime = "1:00 PM";
      break;
    case 26:
      startTime = "1:30 PM";
      break;
    case 27:
      startTime = "2:00 PM";
      break;
    case 28:
      startTime = "2:30 PM";
      break;
    case 29:
      startTime = "3:00 PM";
      break;
    case 30:
      startTime = "3:30 PM";
      break;
    case 31:
      startTime = "4:00 PM";
      break;
    case 32:
      startTime = "4:30 PM";
      break;
    case 33:
      startTime = "5:00 PM";
      break;
    case 34:
      startTime = "5:30 PM";
      break;
    case 35:
      startTime = "6:00 PM";
      break;
    case 36:
      startTime = "6:30 PM";
      break;
    case 37:
      startTime = "7:00 PM";
      break;
    case 38:
      startTime = "7:30 PM";
      break;
    case 39:
      startTime = "8:00 PM";
      break;
    case 40:
      startTime = "8:30 PM";
      break;
    case 41:
      startTime = "9:00 PM";
      break;
    case 42:
      startTime = "9:30 PM";
      break;
    case 43:
      startTime = "10:00 PM";
      break;
    case 44:
      startTime = "10:30 PM";
      break;
    case 45:
      startTime = "11:00 PM";
      break;
    case 46:
      startTime = "11:30 PM";
      break;
    case 47:
      startTime = "12:00 AM";
      break;
  }

  return startTime;
}

 convertArrayToTime(startIndex, endIndex) {

    let startTime = this.convertArrayToTimeHelper(startIndex);
    let endTime = this.convertArrayToTimeHelper(endIndex);

    return [startTime, endTime];
    
 }

 // run through each member of a list
 // for each member of the list run through all 7 days
    // print the day card title
 // for all 7 days run through 48 time slots

 /**return(
        <View key={day.toString() + timeString[0] + timeString[1]} style={style.calendar}>
          <Card name={"Shawn McChargue???"} start={timeString[0]} end={timeString[1]}/>
        </View>
      );  */


 //              [{name: "Shawn", start: "9:00 AM", end: "5:00 PM"}  ]

 whatIwant(list) {

    let cardArray = [];
    let cardObj = {name: "", start: "", end: ""};

    for (let i = 0; i < list.length; i++) 
    {
      console.log("***" + list[i].availability);
      for(var day in list[i].availability) 
      {
          let start;
          let startBool = false;
          let end;
          console.log(day);
          for (let i = 0; i <= name.availability.length; i++)
          {
              if (day[i] && !startBool)
              {
                  start = i;
                  startBool = true;
              }
                  
              if (startBool && !day[i] || i == 47)
              {
                  end = i;
                  break;
              }
          }

          let timeString = this.convertArrayToTime(start, end);
          cardObj.start = timeString[0];
          cardObj.end = timeString[1];
          cardObj.name = name;
          cardArray.push(cardObj);
      }
    }

    return cardArray;
 }

 buidViewCardArray() {
    let cards = this.whatIwant(memberList);
    console.log(cards);
 }

 buildViewSchedule() {

  let schedules = [{id: 1},{id: 2}];
  let availability = [{id: 1},{id: 2}];
  let memberList = [];

  axios.get(`https://cop4331-group11-large.herokuapp.com/api/getAvailability`)
       .then(res => {
         // console.log("****************************************************************** " + res);
         // console.log("***Test*** " + res.data);
         // console.log("***Test Name*** " + res.data.availability.sun);
          // memberList = res.data.members;
         // this.setState({currentAvailability: res.data.availability});
         // console.log("After: " + availability.sun);


       }).catch((error) => {
          console.log(error)
          console.log(error.response)
          Alert.alert(error.response.data.error)
       })

     // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@: " + availability);
     // console.log("After: " + availability.sun);
      
      /*let start;
      let startBool = false
      let end;
      for (let i = 0; i < 48; i++)
      {
        if (availability.sun[i] && !startBool)
        {
          start = i;
          startBool = true;
        }
        if (startBool && !availability.sun[i])
        {
          end = i;
          break;
        }
      }

      let timeString = this.convertArrayToTime(start, end);
      
        return(
          <View style={style.calendar}>
                  <Text style={style.text}>{this.getDates(new Date())[0]}</Text>
            <Card name={"Shawn McChargue???"} start={timeString[0]} end={timeString[1]}/>
          </View>
        );*/
  }

  render() {
    return (
    <View style={style.pageStyle}>
      <ScrollView>
        <View style={style.button}>
        </View>
        {this.buidViewCardArray()}
      </ScrollView>
    </View>
    )}

    /*<Card name={Shawn.name} start={Shawn.start} end={Shawn.end}/>
        <Card name={Jon.name} start={Jon.start} end={Jon.end}/>
        <Card name={sb.name} start={sb.start} end={sb.end}/>
        <Card name={st.name} start={st.start} end={st.end}/>
        <Card name={sandy.name} start={sandy.start} end={sandy.end}/>
        <Card name={larry.name} start={larry.start} end={larry.end}/>
        <Card name={krabs.name} start={krabs.start} end={krabs.end}/>
        <Card name={patrick.name} start={patrick.start} end={patrick.end}/> */
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
    textAlign: "left",
    flex: 1,
    fontSize: 30,
    color: "black",
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
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