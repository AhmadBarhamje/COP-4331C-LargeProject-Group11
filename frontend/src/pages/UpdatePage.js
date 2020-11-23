import React from 'react';
import PageTitle from '../components/PageTitle';
import WeekCalendar from '../react-week-calendar';
import '../react-week-calendar/dist/style.css';
const UpdatePage = () =>
{
    return(
        <div>
        <PageTitle />
        <WeekCalendar />
        </div>
    );
};
export default UpdatePage;