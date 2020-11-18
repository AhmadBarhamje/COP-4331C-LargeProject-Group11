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

    _logout() {
        const logoutData = {
            userId: this.props.id
        };

        axios.delete(`https://cop4331-group11-large.herokuapp.com/api/auth/logout`, logoutData)
         .then(res => {
            console.log(res.data)
            this.props.navigation.navigate("Home")

         }).catch((error) => {
           Alert.alert(error.response.data.error)
        })

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
             title="Logout"
             onPress = {() => this._logout()}
             />
          </View>
        )
    }
}