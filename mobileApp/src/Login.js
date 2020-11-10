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
  TouchableOpacity,
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
                Alert.alert("Invalid username/password")
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
            <View style={styles.container}>

              <View style = {styles.form}>
                <TextInput
                  ref={input => { this.usernameField = input }}
                  style = {styles.textInput}
                  placeholder = "Username"
                  onChangeText = {(text) => this.setState({username: text})}
                 />

                <TextInput
                  ref={input => { this.passwordField = input }}
                  style = {styles.textInput}
                  placeholder = "Password"
                  secureTextEntry = {true}
                  onChangeText = {(text) => this.setState({password: text})}
                 />

                 <TouchableOpacity
                      activeOpacity = {0.8}
                      onPress = {() => this._login()}
                      style = {[styles.LoginButtonStyle, {backgroundColor: "#3badff"}]}
                >
                    <Text style = {styles.appButtonText}>Login</Text>
                </TouchableOpacity>
              </View>

          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#50a3a2",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    form: {
        flex: 0.25,
        justifyContent: "space-between",
        width: "75%"
    },
    InputButtonForm: {
        flex: 0.2,
        justifyContent: "space-between",
        width: "75%"
    },
    textInput: {
        height: 40,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: "space-between"
    },
    LoginButtonStyle: {
        marginTop:5,
        paddingTop:5,
        paddingBottom:5,
        marginLeft:50,
        marginRight:50,
        backgroundColor:'#3badff',
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#000000'
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});