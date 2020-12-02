import React from 'react';
import { BasicTable } from '../components/BasicTable';
import Calendar from '../components/Calendar';
import CalendarComponent from '../components/CalendarComponent';
import TopBanner from '../components/TopBanner';
//import BasicTable from '../components/BasicTable'

const CardPage = () =>
{
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    return(
        <div>
            <TopBanner />
            <CalendarComponent />
        </div>
        );
}

export default CardPage;
