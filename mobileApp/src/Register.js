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

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: undefined,
            password: undefined,
            firstName: undefined,
            lastName: undefined,
            email: undefined,
        }
    }

    invalidEmail() {
        if(!this.state.email) return true
        console.log(this.state.email)
        var regexPattern = /\S+@\S+\.\S+/;
        return !regexPattern.test(this.state.email);
    }

    _register() {
        console.log("register")
        Keyboard.dismiss();

        if(!this.state.firstName) {
            Alert.alert("Please enter a first name.")
            return
        }
        if(!this.state.lastName) {
            Alert.alert("Please enter a last name.")
            return
        }
        if(this.invalidEmail()) {
            Alert.alert("Please enter a valid email.")
            return
        }
        if(!this.state.username) {
            Alert.alert("Please enter a valid username.")
            return
        }
        if(!this.state.password) {
            Alert.alert("Please enter a valid password.")
            return
        }

        const signUpData = {
            userName: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };


        axios.post(`https://cop4331-group11-large.herokuapp.com/api/auth/signup`, signUpData)
         .then(res => {
            console.log(res.data)

            console.log("Account created. Check your email to verify your account.")
            this.props.navigation.navigate("Home")

         }).catch((error) => {
            Alert.alert(error.response.data.error)
         })
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#307ecc'}}>
              <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginTop: 0
                }}>
                <KeyboardAvoidingView enabled>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={styles.inputStyle}
                      onChangeText = {(text) => this.setState({firstName: text})}
                      underlineColorAndroid="#f000"
                      placeholder="Enter First Name"
                      placeholderTextColor="#8b9cb5"
                      onSubmitEditing={Keyboard.dismiss}
                      blurOnSubmit={false}
                    />
                  </View>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={styles.inputStyle}
                      onChangeText = {(text) => this.setState({lastName: text})}
                      underlineColorAndroid="#f000"
                      placeholder="Enter Last Name"
                      placeholderTextColor="#8b9cb5"
                      autoCapitalize="sentences"
                      onSubmitEditing={Keyboard.dismiss}
                      blurOnSubmit={false}
                    />
                   </View>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={styles.inputStyle}
                      onChangeText = {(text) => this.setState({email: text})}
                      underlineColorAndroid="#f000"
                      placeholder="Enter Email"
                      placeholderTextColor="#8b9cb5"
                      autoCapitalize="none"
                      onSubmitEditing={Keyboard.dismiss}
                      keyboardType="email-address"
                      blurOnSubmit={false}
                    />
                  </View>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={styles.inputStyle}
                      onChangeText = {(text) => this.setState({username: text})}
                      underlineColorAndroid="#f000"
                      placeholder="Enter Username"
                      placeholderTextColor="#8b9cb5"
                      onSubmitEditing={Keyboard.dismiss}
                      autoCapitalize="none"
                      blurOnSubmit={false}
                    />
                  </View>
                   <View style={styles.SectionStyle}>
                       <TextInput
                         style={styles.inputStyle}
                         onChangeText = {(text) => this.setState({password: text})}
                         underlineColorAndroid="#f000"
                         placeholder="Enter Password"
                         placeholderTextColor="#8b9cb5"
                         autoCapitalize="none"
                         secureTextEntry={true}
                         onSubmitEditing={Keyboard.dismiss}
                         blurOnSubmit={false}
                       />
                  </View>

                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress = {() => this._register()}>
                    <Text style={styles.buttonTextStyle}>
                      REGISTER
                    </Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          )
    }

}

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});