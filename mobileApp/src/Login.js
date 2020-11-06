import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  Alert,
  Button,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import axios from 'axios';


export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: undefined,
            password: undefined,
        }
    }

    _login() {
        console.log(this.state.username)
        console.log(this.state.password)

        Keyboard.dismiss();
        this.usernameField.clear();
        this.passwordField.clear();

        const loginData = {
            userName: this.state.username,
            password: this.state.password
        };

        axios.post(`https://cop4331-group11-large.herokuapp.com/api/auth/login`, loginData)
          .then(res => {
            console.log(res.data)

            this.state.username = undefined;
            this.state.password = undefined;

            if(res.data.id < 0) {
                console.log("invalid username/password")
            }
            else {
                this.props.navigation.navigate("Dashboard", {
                    accessToken: res.data.accessToken,
                    id: res.data.id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    userName: res.data.userName
                 })
            }

          })
    }


    render() {
        return (
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}>

            <TextInput
              ref={input => { this.usernameField = input }}
              style = {{ height: 40, width: 250, borderColor: 'black', backgroundColor: 'gray', borderWidth: 1 }}
              placeholder = "Type username here"
              onChangeText = {(text) => this.setState({username: text})}
             />

            <TextInput
              ref={input => { this.passwordField = input }}
              style = {{ height: 40, width: 250, borderColor: 'black', backgroundColor: 'gray', borderWidth: 1 }}
              placeholder = "Type password here"
              secureTextEntry = {true}
              onChangeText = {(text) => this.setState({password: text})}
             />

             <Button
              title="login"
              onPress = {() => this._login()}
              />
          </View>
        )
    }
}