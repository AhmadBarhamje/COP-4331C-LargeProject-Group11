import React from 'react';

import CalendarComponent from '../components/CalendarComponent';

const CardPage = () =>
{
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    return(
        <div>
            <span id="userName">Showing Schedule for {firstName} {lastName}</span>
            <CalendarComponent />
        </div>
        );
}

export default CardPage;