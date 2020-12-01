import React from 'react';

import LoggedInName from '../components/LoggedInName';
import ViewSchedules from '../components/ViewSchedules';

const ViewSchedulesPage = () =>
{
    return(
        <div>
            <LoggedInName />
            <ViewSchedules />
        </div>
        );
}

export default ViewSchedulesPage;