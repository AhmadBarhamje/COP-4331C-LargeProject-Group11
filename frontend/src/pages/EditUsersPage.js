import React from 'react';

import LoggedInName from '../components/LoggedInName';
import EditUsers from '../components/EditUsers';

const EditUsersPage = () =>
{
    return(
        <div>
            <LoggedInName />
            <EditUsers />
        </div>
        );
}

export default EditUsersPage;