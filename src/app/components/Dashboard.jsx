import React from 'react';

import {connect} from 'react-redux';
import {TaskList, ConnecteedTaskList} from './TaskList';
export const Dashboard = ({groups}) => (
<div>
    <h1>
        {groups.map((g,i) => (
            <ConnecteedTaskList key={i} id={g.id} name={g.name}/>
        ))}
    </h1>
</div>
    )

    function mapStateToProps (state)  {
    return {groups: state.groups};
    }

    export const ConnectedDashboard =  connect(mapStateToProps)(Dashboard)