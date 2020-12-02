import React from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import CustomEvent from '../components/CustomEvent';
import CustomModal from '../components/CustomModal';
import api from '../api';


export default class StandardCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastUid: 4,
      selectedIntervals: []
    }
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }

  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {

      return {
        ...interval,
        uid: lastUid + index
      }
    });

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals), //
      lastUid: lastUid + newIntervals.length
      
    })
    this.logging(newIntervals);
    this.printArray(selectedIntervals);
  }
  logging(interval) {
    //console.log(interval[0].start)
    for (var i = 0; i < interval.length; i++) {
      var str = interval[i].start._d.getDay();
      var monthNumber = this.convertToMonth(str);
      console.log(monthNumber);
      console.log(interval[i].end._d.getDay() + ' ' + interval[i].end._d.toTimeString())
    }

  }
  printArray(selectedIntervals) {
    for (var i = 0; i < selectedIntervals.length; i++) {
      console.log(selectedIntervals[i].start._d.getDay() + ' ' + selectedIntervals[i].start._d.toTimeString());
      console.log(selectedIntervals[i].end._d.getDay() + ' ' + selectedIntervals[i].end._d.toTimeString());
    }
  }
  convertToMonth(str) {
    var res = str.toString();
    var monthNumber = res.split(" ", 1);
    switch (monthNumber[0]){
      case "0":
        return monthNumber = "sun";
      case "1":
        return monthNumber = "mon";
      case "2":
        return monthNumber = "tue";
      case "3":
        return monthNumber = "wed";
      case "4":
        return monthNumber = "thu";
      case "5":
        return monthNumber = "fri";
      case "6":
        return monthNumber = "sat";
    }
    return monthNumber;

  }
  render() {
    return <WeekCalendar
      firstDay = {moment().day(0)}
      startTime = {moment({h: 0, m: 0})}
      //endTime = {moment({h: 24, m: 59})}
      numberOfDays= {7}
      dayFormat = {'dddd.'}
      scaleUnit = {30}
      //useModal = {false}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
      modalComponent = {CustomModal}
      //eventComponent={CustomEvent} shows booked on cell
    />
  }
}
