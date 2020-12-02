import React from 'react';

import LoggedInName from '../components/LoggedInName';
import EditGroups from '../components/EditGroups';

const EditGroupsPage = () =>
{
    return(
        <div>
            <LoggedInName />
            <EditGroups />
        </div>
        );
}

export default EditGroupsPage;