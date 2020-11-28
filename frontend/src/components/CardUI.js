import React from 'react';
import PageTitle from '../components/PageTitle';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';

import Calendar from './Calendar'

const CardUI = () =>
{
    return(
        <div>
        <PageTitle />
        <Calendar />
        </div>
    );
};
export default CardUI;