import React from 'react';

import LoggedInName from '../components/LoggedInName';
import Availability from '../components/Availability';

const AvailabilityPage = () =>
{
    return(
        <div>
            <LoggedInName />
            <Availability />
        </div>
        );
}

export default AvailabilityPage;