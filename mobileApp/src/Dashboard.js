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
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import axios from 'axios';


export class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }



    navigate_to_settings() {
        this.props.navigation.navigate("Settings", {
            accessToken: this.props.route.params.accessToken,
            id: this.props.route.params.id,
            firstName: this.props.route.params.firstName,
            lastName: this.props.route.params.lastName,
            userName: this.props.route.params.userName
         })
    }

    testFunc() {
        console.log("!!")
        console.log(this.props)
    }

    navigate_to_createGroup() {
        this.props.navigation.navigate("CreateGroup", {
            accessToken: this.props.route.params.accessToken,
            id: this.props.route.params.id,
            firstName: this.props.route.params.firstName,
            lastName: this.props.route.params.lastName,
            userName: this.props.route.params.userName
         })
    }

    navigate_to_SchedulePage() {
        this.props.navigation.navigate("SchedulePage", {
            accessToken: this.props.route.params.accessToken,
            id: this.props.route.params.id,
            firstName: this.props.route.params.firstName,
            lastName: this.props.route.params.lastName,
            userName: this.props.route.params.userName
        })
    }

    navigate_to_ViewGroups() {
        this.props.navigation.navigate("ViewGroups", {
            accessToken: this.props.route.params.accessToken,
            id: this.props.route.params.id,
            firstName: this.props.route.params.firstName,
            lastName: this.props.route.params.lastName,
            userName: this.props.route.params.userName
        })
    }

    navigate_to_SubmitSchedulePage() {
        this.props.navigation.navigate("SubmitAvailabilityPage", {
            accessToken: this.props.route.params.accessToken,
            id: this.props.route.params.id,
            firstName: this.props.route.params.firstName,
            lastName: this.props.route.params.lastName,
            userName: this.props.route.params.userName
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
                   <View style={styles.SectionStyle}>
                        <TouchableOpacity
                            style={[styles.buttonStyle2, {}]}
                            onPress = {() => this.navigate_to_ViewGroups()}>
                            <Text style={styles.buttonTextStyle}> View Groups </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress = {() => this.navigate_to_SubmitSchedulePage()}>
                            <Text style={styles.buttonTextStyle}> Update Your Schedule </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress = {() => this.navigate_to_createGroup()}>
                            <Text style={styles.buttonTextStyle}> Create/Delete Groups </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttonStyle2]}
                            onPress = {() => this.testFunc()}>
                            <Text style={styles.buttonTextStyle}> Add/Remove Users </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttonStyle2, {backgroundColor: '#7d7d7d'}]}
                            onPress = {() => this.navigate_to_settings()}>
                            <Text style={styles.buttonTextStyle}> Settings </Text>
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