import axios from 'axios';
import React, { Component} from 'react';
import { View, Text } from 'react-native';
import SubmitSchedule from './SubmitSchedule.js';


export class SubmitAvailabilityPage extends Component {
    constructor(props) {
        super(props)

        axios.interceptors.request.use((config) => {
            config.headers['x-auth-token'] = JSON.stringify(this.props.route.params.accessToken);
            console.log("******************************************************************** : " + this.props.route.params.accessToken);
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

    render(){
        return(
            <SubmitSchedule/>
        )
    }
}