import React from 'react';

import LoggedInName from '../components/LoggedInName';
import SelectedGroup from '../components/SelectedGroup';

const SelectedGroupPage = () =>
{
    return(
        <div>
            <LoggedInName />
            <SelectedGroup />
        </div>
        );
}

export default SelectedGroupPage;