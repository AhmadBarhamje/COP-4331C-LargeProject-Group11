import axios from 'axios';
import React, { Component} from 'react';
import BestSchedule from './BestSchedule.js';


export class BestSchedulePage extends Component {
    constructor(props) {
        super(props)

        axios.interceptors.request.use((config) => {
            config.headers['x-auth-token'] = JSON.stringify(this.props.route.params.accessToken);
            console.log(this.props.route.params.accessToken);
            config.headers['content-type'] = 'application/json; charset=utf-8';
            return config;
        },
         (error) => {
             Promise.reject(error);
         });

        axios.interceptors.response.use(response => {
          console.log('Response:', JSON.stringify(response, null, 2))
          return response;
        })
    }

    render(){
        return(
            <BestSchedule username={this.props.route.params.userName} ownerSchedule={this.props.route.params.ownerSchedule}/>
        )
    }
}