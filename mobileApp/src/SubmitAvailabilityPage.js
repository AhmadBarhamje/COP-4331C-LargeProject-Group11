import axios from 'axios';
import React, { Component} from 'react';
import { View, Text } from 'react-native';
import SubmitSchedule from './SubmitSchedule.js';


export class SubmitAvailabilityPage extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <SubmitSchedule/>
        )
    }
}