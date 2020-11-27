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
import axios from 'axios';


export class AddMembers extends Component {
    constructor(props) {
        super(props)

        axios.interceptors.request.use((config) => {
            console.log("TOKEN " + this.props.route.params.accessToken)
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

        this.state = {
            groupName: undefined,
        }
    }

    addMember() {
        Keyboard.dismiss();

        if(!this.state.groupName) {
            Alert.alert("Please enter a non-empty group name.");
            return;
        }
        if(!this.state.memberName) {
            Alert.alert("Please enter a non-empty member name.");
            return;
        }
        if(this.state.memberName == this.props.route.params.userName) {
            Alert.alert("You cannot add yourself from the group.");
            return;
        }

        let groupData = {
            name: this.props.route.params.userName + "." +  this.state.groupName,
            affectedUser: this.state.memberName,
        }

        axios.post(`https://cop4331-group11-large.herokuapp.com/api/addMember`, groupData)
         .then(res => {
            console.log(res.data);

            if(!res.data.success) {
                Alert.alert("Failed.");
                return;
            }

            Alert.alert("Member successfully added!");

            this.groupNameField.clear();
            this.memberNameField.clear();

         }).catch((error) => {
            console.log(error)
            console.log(error.response)
            Alert.alert(error.response.data.error)
         })

    }

    deleteMember() {
        Keyboard.dismiss();

        if(!this.state.groupName) {
            Alert.alert("Please enter a non-empty group name.");
            return;
        }
        if(!this.state.memberName) {
            Alert.alert("Please enter a non-empty member name.");
            return;
        }
        if(this.state.memberName == this.props.route.params.userName) {
            Alert.alert("You cannot delete yourself from the group.");
            return;
        }

        let groupData = {
            name: this.props.route.params.userName + "." + this.state.groupName,
            affectedUser: this.state.memberName,
        }

        axios.delete(`https://cop4331-group11-large.herokuapp.com/api/removeMember`, {data: groupData })
         .then(res => {

            if(!res.data.success) {
                Alert.alert(res.data.error);
                return;
            }

            this.groupNameField.clear();
            this.memberNameField.clear();

            Alert.alert("Member successfully deleted.");

         }).catch((error) => {
           console.log(error)
           console.log(error.response)
           Alert.alert(error.response.data.error)
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
                        ref={input => { this.groupNameField = input }}
                        style={styles.inputStyle}
                        onChangeText = {(text) => this.setState({groupName: text})}
                        placeholder="Enter Group Name"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        onSubmitEditing={Keyboard.dismiss}
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.SectionStyle}>
                      <TextInput
                          ref={input => { this.memberNameField = input }}
                          style={styles.inputStyle}
                          onChangeText = {(text) => this.setState({memberName: text})}
                          placeholder="Enter Member User Name"
                          placeholderTextColor="#8b9cb5"
                          autoCapitalize="none"
                          onSubmitEditing={Keyboard.dismiss}
                          underlineColorAndroid="#f000"
                          blurOnSubmit={false}
                        />
                    </View>

                    <TouchableOpacity
                      style={styles.buttonStyle}
                      activeOpacity={0.5}
                      onPress = {() => this.addMember()}>
                      <Text style={styles.buttonTextStyle}>
                        ADD MEMBER
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.buttonStyle, {backgroundColor: "#cf1919"}]}
                      activeOpacity={0.5}
                      onPress = {() => this.deleteMember()}>
                      <Text style={styles.buttonTextStyle}>
                        DELETE MEMBER
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