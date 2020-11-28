import React from 'react';

import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';
import WeekCalendar from '../react-week-calendar';
import '../react-week-calendar/dist/style.css';

const CardPage = () =>
{
    return(
        <div>
            <LoggedInName />
            <WeekCalendar />
        </div>
        );
}

export default CardPage;