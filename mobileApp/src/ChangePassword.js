import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  Alert,
  Button,
  KeyboardAvoidingView,
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


export class ChangePassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oldPassword: undefined,
            newPassword: undefined,
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

    changePassword() {
        console.log('Changing Password');

        Keyboard.dismiss();
        this.oldPasswordField.clear();
        this.newPasswordField.clear();

        if(!this.state.oldPassword) {
            Alert.alert("Please enter your current password.");
            return;
        }
        if(!this.state.newPassword) {
            Alert.alert("Please enter a new password.");
            return;
        }

        const changePassData = {
            password: this.state.oldPassword,
            newPassword: this.state.newPassword,
        };

        axios.post(`https://cop4331-group11-large.herokuapp.com/api/auth/changepass`, changePassData)
          .then(res => {
            console.log(res.data);

            if(!res.data.success) {
                Alert.alert("Unsuccessfully changed password.");
            }
            else {
                Alert.alert("Successfully changed password.");

                this.props.navigation.navigate("Dashboard", {
                    accessToken: this.props.route.params.accessToken,
                    id: this.props.route.params.id,
                    firstName: this.props.route.params.firstName,
                    lastName: this.props.route.params.lastName,
                    userName: this.props.route.params.userName
                 })
            }

         }).catch((error) => {
            console.log(error)
            console.log(error.response)
//             Alert.alert(error.response.data.error)
         })

    }

    testFunc() {
        console.log("!")
        console.log(this.props)
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
                         ref={input => { this.oldPasswordField = input }}
                         style={styles.inputStyle}
                         onChangeText = {(text) => this.setState({oldPassword: text})}
                         placeholder="Enter Current Password"
                         placeholderTextColor="#8b9cb5"
                         autoCapitalize="none"
                         onSubmitEditing={Keyboard.dismiss}
                         secureTextEntry={true}
                         underlineColorAndroid="#f000"
                         blurOnSubmit={false}
                       />
                     </View>
                     <View style={styles.SectionStyle}>
                       <TextInput
                         ref={input => { this.newPasswordField = input }}
                         style={styles.inputStyle}
                         onChangeText = {(text) => this.setState({newPassword: text})}
                         placeholder="Enter New Password"
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
                       onPress = {() => this.changePassword()}>
                       <Text style={styles.buttonTextStyle}>
                         CHANGE PASSWORD
                       </Text>
                     </TouchableOpacity>
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