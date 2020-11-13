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

            if(res.data.id == -1) {
                Alert.alert("Invalid username/password")
            }
            else if(res.data.id == -2) {
                Alert.alert("Account not verified.")
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
            <View style={styles.mainBody}>

              <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                  flex: 1,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <View>
                  <KeyboardAvoidingView enabled>
                    <View style={styles.SectionStyle}>
                      <TextInput
                        ref={input => { this.usernameField = input }}
                        style={styles.inputStyle}
                        onChangeText = {(text) => this.setState({username: text})}
                        placeholder="Enter Username"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        onSubmitEditing={Keyboard.dismiss}
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.SectionStyle}>
                      <TextInput
                        ref={input => { this.passwordField = input }}
                        style={styles.inputStyle}
                        onChangeText = {(text) => this.setState({password: text})}
                        placeholder="Enter Password"
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                        autoCapitalize="none"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        underlineColorAndroid="#f000"
                      />
                    </View>

                    <TouchableOpacity
                      style={styles.buttonStyle}
                      activeOpacity={0.5}
                      onPress = {() => this._login()}>
                      <Text style={styles.buttonTextStyle}>
                        LOGIN
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={styles.registerTextStyle}
                      onPress={() => this.props.navigation.navigate("Register")}
                      >
                      New here? Register!
                    </Text>
                    <Text
                      style={styles.registerTextStyle}
//                      onPress={() => this.props.navigation.navigate("Register")}
                      >
                      Forgot password? Click here!
                    </Text>
                  </KeyboardAvoidingView>
                </View>
              </ScrollView>
            </View>
          )
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
});