import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import axios from 'axios';


export class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    _print() {
        console.log(this.props)
    }

    render() {
        return (
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}>

           <Text> Hello World! </Text>
           <Button
             title="See parameters"
             onPress = {() => this._print()}
             />
          </View>
        )
    }
}