import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  Alert,
  Button,
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


export class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    logout() {
        const logoutData = {
            userId: this.props.route.params.id
        };

        console.log(logoutData);

        axios.delete(`https://cop4331-group11-large.herokuapp.com/api/auth/logout`, logoutData)
         .then(res => {
            console.log(res.data)
            this.props.navigation.navigate("Home")

         }).catch((error) => {
            console.log("um");
//           Alert.alert(error.response.data.error)
        })

    }

    changePassword() {
        this.props.navigation.navigate("ChangePassword", {
            accessToken: this.props.route.params.accessToken,
            id: this.props.route.params.id,
            firstName: this.props.route.params.firstName,
            lastName: this.props.route.params.lastName,
            userName: this.props.route.params.userName
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
                 <View style={styles.SectionStyle}>
                    <TouchableOpacity
                        style={[styles.buttonStyle2, {backgroundColor: '#2229f2'}]}
                        onPress = {() => this.changePassword()}
                        >
                       <Text style={styles.buttonTextStyle}> Change Password </Text>
                      </TouchableOpacity>
                    <TouchableOpacity
                       style={[styles.buttonStyle2, {backgroundColor: '#cf1919'}]}
                       onPress = {() => this.logout()}
                       >
                      <Text style={styles.buttonTextStyle}> Logout </Text>
                     </TouchableOpacity>

                 </View>

                </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#307ecc',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'column',
        flex: 1,
        height: 40,
        marginTop: 150,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 150,
        width: 150,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
        marginBottom: 5,
    },
    textStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 0,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 13,
        fontSize: 16,
    },
    buttonStyle2: {
        backgroundColor: '#7DE24E',
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
        marginBottom: 25,
        borderColor: '#dadae8',
    },
});