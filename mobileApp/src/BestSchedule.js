import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert, Button } from 'react-native';

let bestSchedule = {sun: Array(48).fill(Array(48).fill(null)), mon: Array(48).fill(Array(48).fill(null)), tue: Array(48).fill(Array(48).fill(null)), wed: Array(48).fill(Array(48).fill(null)), thu: Array(48).fill(Array(48).fill(null)), fri: Array(48).fill(Array(48).fill(null)), sat: Array(48).fill(Array(48).fill(null))};
let membersLength = 0;

export default function BestSchedule(props) {

    const [total, setTotal] = useState({});

    const sunday = [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14},
        {id: 15},
        {id: 16},
        {id: 17},
        {id: 18},
        {id: 19},
        {id: 20},
        {id: 21},
        {id: 22},
        {id: 23},
        {id: 24},
        {id: 25},
        {id: 26},
        {id: 27},
        {id: 28},
        {id: 29},
        {id: 30},
        {id: 31},
        {id: 32},
        {id: 33},
        {id: 34},
        {id: 35},
        {id: 36},
        {id: 37},
        {id: 38},
        {id: 39},
        {id: 40},
        {id: 41},
        {id: 42},
        {id: 43},
        {id: 44},
        {id: 45},
        {id: 46},
        {id: 47},
    ];
    const monday = [
        {id: 48},
        {id: 49},
        {id: 50},
        {id: 51},
        {id: 52},
        {id: 53},
        {id: 54},
        {id: 55},
        {id: 56},
        {id: 57},
        {id: 58},
        {id: 59},
        {id: 60},
        {id: 61},
        {id: 62},
        {id: 63},
        {id: 64},
        {id: 65},
        {id: 66},
        {id: 67},
        {id: 68},
        {id: 69},
        {id: 70},
        {id: 71},
        {id: 72},
        {id: 73},
        {id: 74},
        {id: 75},
        {id: 76},
        {id: 77},
        {id: 78},
        {id: 79},
        {id: 80},
        {id: 81},
        {id: 82},
        {id: 83},
        {id: 84},
        {id: 85},
        {id: 86},
        {id: 87},
        {id: 88},
        {id: 89},
        {id: 90},
        {id: 91},
        {id: 92},
        {id: 93},
        {id: 94},
        {id: 95},
    ];
    const tuesday = [
        {id: 96},
        {id: 97},
        {id: 98},
        {id: 99},
        {id: 100},
        {id: 101},
        {id: 102},
        {id: 103},
        {id: 104},
        {id: 105},
        {id: 106},
        {id: 107},
        {id: 108},
        {id: 109},
        {id: 110},
        {id: 111},
        {id: 112},
        {id: 113},
        {id: 114},
        {id: 115},
        {id: 116},
        {id: 117},
        {id: 118},
        {id: 119},
        {id: 120},
        {id: 121},
        {id: 122},
        {id: 123},
        {id: 124},
        {id: 125},
        {id: 126},
        {id: 127},
        {id: 128},
        {id: 129},
        {id: 130},
        {id: 131},
        {id: 132},
        {id: 133},
        {id: 134},
        {id: 135},
        {id: 136},
        {id: 137},
        {id: 138},
        {id: 139},
        {id: 140},
        {id: 141},
        {id: 142},
        {id: 143},
    ];
    const wednesday = [
        {id: 144},
        {id: 145},
        {id: 146},
        {id: 147},
        {id: 148},
        {id: 149},
        {id: 150},
        {id: 151},
        {id: 152},
        {id: 153},
        {id: 154},
        {id: 155},
        {id: 156},
        {id: 157},
        {id: 158},
        {id: 159},
        {id: 160},
        {id: 161},
        {id: 162},
        {id: 163},
        {id: 164},
        {id: 165},
        {id: 166},
        {id: 167},
        {id: 168},
        {id: 169},
        {id: 170},
        {id: 171},
        {id: 172},
        {id: 173},
        {id: 174},
        {id: 175},
        {id: 176},
        {id: 177},
        {id: 178},
        {id: 179},
        {id: 180},
        {id: 181},
        {id: 182},
        {id: 183},
        {id: 184},
        {id: 185},
        {id: 186},
        {id: 187},
        {id: 188},
        {id: 189},
        {id: 190},
        {id: 191},
    ];
    const thursday = [
        {id: 192},
        {id: 193},
        {id: 194},
        {id: 195},
        {id: 196},
        {id: 197},
        {id: 198},
        {id: 199},
        {id: 200},
        {id: 201},
        {id: 202},
        {id: 203},
        {id: 204},
        {id: 205},
        {id: 206},
        {id: 207},
        {id: 208},
        {id: 209},
        {id: 210},
        {id: 211},
        {id: 212},
        {id: 213},
        {id: 214},
        {id: 215},
        {id: 216},
        {id: 217},
        {id: 218},
        {id: 219},
        {id: 220},
        {id: 221},
        {id: 222},
        {id: 223},
        {id: 224},
        {id: 225},
        {id: 226},
        {id: 227},
        {id: 228},
        {id: 229},
        {id: 230},
        {id: 231},
        {id: 232},
        {id: 233},
        {id: 234},
        {id: 235},
        {id: 236},
        {id: 237},
        {id: 238},
        {id: 239},
    ];
    const friday = [
        {id: 240},
        {id: 241},
        {id: 242},
        {id: 243},
        {id: 244},
        {id: 245},
        {id: 246},
        {id: 247},
        {id: 248},
        {id: 249},
        {id: 250},
        {id: 251},
        {id: 252},
        {id: 253},
        {id: 254},
        {id: 255},
        {id: 256},
        {id: 257},
        {id: 258},
        {id: 259},
        {id: 260},
        {id: 261},
        {id: 262},
        {id: 263},
        {id: 264},
        {id: 265},
        {id: 266},
        {id: 267},
        {id: 268},
        {id: 269},
        {id: 270},
        {id: 271},
        {id: 272},
        {id: 273},
        {id: 274},
        {id: 275},
        {id: 276},
        {id: 277},
        {id: 278},
        {id: 279},
        {id: 280},
        {id: 281},
        {id: 282},
        {id: 283},
        {id: 284},
        {id: 285},
        {id: 286},
        {id: 287},
    ];
    const saturday = [
        {id: 288},
        {id: 289},
        {id: 290},
        {id: 291},
        {id: 292},
        {id: 293},
        {id: 294},
        {id: 295},
        {id: 296},
        {id: 297},
        {id: 298},
        {id: 299},
        {id: 300},
        {id: 301},
        {id: 302},
        {id: 303},
        {id: 304},
        {id: 305},
        {id: 306},
        {id: 307},
        {id: 308},
        {id: 309},
        {id: 310},
        {id: 311},
        {id: 312},
        {id: 313},
        {id: 314},
        {id: 315},
        {id: 316},
        {id: 317},
        {id: 318},
        {id: 319},
        {id: 320},
        {id: 321},
        {id: 322},
        {id: 323},
        {id: 324},
        {id: 325},
        {id: 326},
        {id: 327},
        {id: 328},
        {id: 329},
        {id: 330},
        {id: 331},
        {id: 332},
        {id: 333},
        {id: 334},
        {id: 335},
    ];

    const getSchedule = () => {

        axios.get(`https://cop4331-group11-large.herokuapp.com/api/getSchedule?name=` + props.username + '.' + props.ownerSchedule, {})
         .then(res => {
            bestSchedule = res.data.schedule;
            membersLength = res.data.members.length;
            console.log("**************************************************************************" + membersLength);
            setTotal(bestSchedule);
         }).catch((error) => {
            console.log(error)
            console.log(error.response)
            Alert.alert(error.response.data.error)
         })

    }

    
    const buildViewSunday = () => {
        return sunday.map(item =>{
            return(
                <View key={item.id} style={styles.calendar}>
                    <View style={{
                        backgroundColor: calculateShade(bestSchedule.sun[item.id].length),
                        padding: 15,
                        margin: 10,}}>
                     </View>
                </View>
              );
        });
    }
    const buildViewMonday = () => {
        return monday.map(item =>{
            return(
                <View key={item.id} style={styles.calendar}>
                    <View style={{
                        backgroundColor: calculateShade(bestSchedule.mon[item.id - 48].length),
                        padding: 15,
                        margin: 10,}}>
                     </View>
                </View>
              );
        });
    }
    const buildViewTuesday = () => {
        return tuesday.map(item =>{
            return(
                <View key={item.id} style={styles.calendar}>
                    <View style={{
                        backgroundColor: calculateShade(bestSchedule.tue[item.id - 96].length),
                        padding: 15,
                        margin: 10,}}>
                     </View>
                </View>
              );
        });
    }
    const buildViewWednesday = () => {
        return wednesday.map(item =>{
            return(
                <View key={item.id} style={styles.calendar}>
                    <View style={{
                        backgroundColor: calculateShade(bestSchedule.wed[item.id - 144].length),
                        padding: 15,
                        margin: 10,}}>
                     </View>
                </View>
              );
        });
    }
    const buildViewThursday = () => {
        return thursday.map(item =>{
            return(
                <View key={item.id} style={styles.calendar}>
                    <View style={{
                        backgroundColor: calculateShade(bestSchedule.thu[item.id - 192].length),
                        padding: 15,
                        margin: 10,}}>
                     </View>
                </View>
              );
        });
    }
    const buildViewFriday = () => {
        return friday.map(item =>{
            return(
                <View key={item.id} style={styles.calendar}>
                    <View style={{
                        backgroundColor: calculateShade(bestSchedule.fri[item.id - 240].length),
                        padding: 15,
                        margin: 10,}}>
                     </View>
                </View>
              );
        });
    }
    const buildViewSaturday = () => {
        return saturday.map(item =>{
            return(
                <View key={item.id} style={styles.calendar}>
                    <View style={{
                        backgroundColor: calculateShade(bestSchedule.sat[item.id - 288].length),
                        padding: 15,
                        margin: 10,}}>
                     </View>
                </View>
              );
        });
    }

    const calculateShade = (num) => {
        let colval = "rgb(0, ";
        let G;
        if (num == 0)
            G = 0;
        else if (num == 1)
        {
            G = 80;
        }
        else if (num >= membersLength)
        {
            G = 255;
        }
        else
        {
            G = (255/membersLength) * num;
        }
        let end = ", 0)";


        if (G >= 250)
            G = 255;

        return colval + G + end;
    }     
    
    return (
        <View style={styles.CalendarDay}>
            <ScrollView style={styles.scrollStyle}>
                <View>
                    <Button title="See Best Meeting Times" onPress={getSchedule}/>
                </View>
                <View style={styles.days}>
                    <Text>{"S"}</Text>
                    <Text>{"M"}</Text>
                    <Text>{"T"}</Text>
                    <Text>{"W"}</Text>
                    <Text>{"T"}</Text>
                    <Text>{"F"}</Text>
                    <Text>{"S"}</Text>
                </View>
                <View style={styles.CalendarDay}>

                    <View style={styles.times}>
                        <Text>{'12:00 AM'}</Text>
                        <Text>{'12:30 AM'}</Text>
                        <Text>{'1:00 AM'}</Text>
                        <Text>{'1:30 AM'}</Text>
                        <Text>{'2:00 AM'}</Text>
                        <Text>{'2:30 AM'}</Text>
                        <Text>{'3:00 AM'}</Text>
                        <Text>{'3:30 AM'}</Text>
                        <Text>{'4:00 AM'}</Text>
                        <Text>{'4:30 AM'}</Text>
                        <Text>{'5:00 AM'}</Text>
                        <Text>{'5:30 AM'}</Text>
                        <Text>{'6:00 AM'}</Text>
                        <Text>{'6:30 AM'}</Text>
                        <Text>{'7:00 AM'}</Text>
                        <Text>{'7:30 AM'}</Text>
                        <Text>{'8:00 AM'}</Text>
                        <Text>{'8:30 AM'}</Text>
                        <Text>{'9:00 AM'}</Text>
                        <Text>{'9:30 AM'}</Text>
                        <Text>{'10:00 AM'}</Text>
                        <Text>{'10:30 AM'}</Text>
                        <Text>{'11:00 AM'}</Text>
                        <Text>{'11:30 AM'}</Text>
                        <Text>{'12:00 PM'}</Text>
                        <Text>{'12:30 PM'}</Text>
                        <Text>{'1:00 PM'}</Text>
                        <Text>{'1:30 PM'}</Text>
                        <Text>{'2:00 PM'}</Text>
                        <Text>{'2:30 PM'}</Text>
                        <Text>{'3:00 PM'}</Text>
                        <Text>{'3:30 PM'}</Text>
                        <Text>{'4:00 PM'}</Text>
                        <Text>{'4:30 PM'}</Text>
                        <Text>{'5:00 PM'}</Text>
                        <Text>{'5:30 PM'}</Text>
                        <Text>{'6:00 PM'}</Text>
                        <Text>{'6:30 PM'}</Text>
                        <Text>{'7:00 PM'}</Text>
                        <Text>{'7:30 PM'}</Text>
                        <Text>{'8:00 PM'}</Text>
                        <Text>{'8:30 PM'}</Text>
                        <Text>{'9:00 PM'}</Text>
                        <Text>{'9:30 PM'}</Text>
                        <Text>{'10:00 PM'}</Text>
                        <Text>{'10:30 PM'}</Text>
                        <Text>{'11:00 PM'}</Text>
                        <Text>{'11:30 PM'}</Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        {buildViewSunday()}
                    </View>
                    <View style={styles.buttonStyle}>
                        {buildViewMonday()}
                    </View>
                    <View style={styles.buttonStyle}>
                        {buildViewTuesday()}
                    </View>
                    <View style={styles.buttonStyle}>
                        {buildViewWednesday()}
                    </View>
                    <View style={styles.buttonStyle}>
                        {buildViewThursday()}
                    </View>
                    <View style={styles.buttonStyle}>
                        {buildViewFriday()}
                    </View>
                    <View style={styles.buttonStyle}>
                        {buildViewSaturday()}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    CalendarDay: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    line: {
        backgroundColor: 'white',
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        paddingTop: 15,
        margin: 10,
    },
    scrollStyle: {
        flexDirection: 'column'
    },
    calendar: {
        backgroundColor: 'grey',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    times: {
        justifyContent: 'space-around',
        flex: 1,
        paddingLeft: 1,
        backgroundColor: 'white',
    },
    days: {
        backgroundColor: 'white',
        paddingLeft: 60,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});