import React from 'react';
import PageTitle from '../components/PageTitle';
import 'react-week-calendar/dist/style.css';

import Calendar from './Calendar'

const CalendarComponent = () =>
{
    return(
        <div>
        <PageTitle />
        <Calendar />
        </div>
    );
};
export default CalendarComponent;