import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import { AppRegistry, SectionList } from 'react-native';
import axios from 'axios';


export class ViewGroups extends Component {

    constructor(props) {
        super(props)

        axios.interceptors.request.use((config) => {
            config.headers['x-auth-token'] = JSON.stringify(this.props.route.params.accessToken);
            config.headers['content-type'] = 'application/json; charset=utf-8';
            return config;
        },
         (error) => {
             Promise.reject(error);
         });

        axios.interceptors.response.use(response => {
          return response
        })

        this.state = {
            username: undefined,
            password: undefined,
            listData: [],
        }

        this.viewUserGroups();
    }

    parseGroups(schedules) {
        console.log("Parsing...");
        for(var i = 0; i < schedules.length; i++) {
            var pos = schedules[i].indexOf('.');
            schedules[i] = schedules[i].substring(pos+1);
        }
        let nextListData = [...this.state.listData];
        schedules.sort( function(a,b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

        for(var i = 0; i < schedules.length; i++) {
            var j = i;
            while(j < schedules.length && schedules[j].charAt(0) == schedules[i].charAt(0)) j++;
            var tempData = [];
            for(var k = i; k < j; k++) {
                tempData.push({name: schedules[k]})
            }

            var ch = schedules[i].toUpperCase().charAt(0);
            nextListData.push({title: ch, data: tempData});
            i = --j;
        }

        if(nextListData.length == 0) {
            nextListData.push({title: 'No Groups', data: []})
        }
        else {
            this.setState({listData: nextListData});
        }

        console.log("Finished parsing data");
    }

    viewUserGroups() {

        axios.get(`https://cop4331-group11-large.herokuapp.com/api/getAllSchedules`, {})
         .then(res => {

            console.log(res.data)
            console.log(res.data['schedules']);
            this.parseGroups(res.data['schedules'])

         }).catch((error) => {
            console.log(error)
            console.log(error.response)
            Alert.alert(error.response.data.error)
         })

    }

    navigate_to_schedule(scheduleName) {
        console.log("name " + scheduleName);
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={ this.state.listData }
                    renderItem={({item, index, section}) => <Button title={item.name} onPress={() => { this.navigate_to_schedule({item}.item.name)}}  />}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => item+index}
                />
            </View>
        );
        }
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  container: {
      flex: 1,
      backgroundColor: "#5ead97"
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 22,
      fontWeight: 'bold',
      color: "#fff",
      backgroundColor: '#8fb1aa',
  },
  item: {
      padding: 10,
      fontSize: 18,
      height: 44,
  },
});