import React from 'react';
import {connect} from 'react-redux';
export const TaskList = ({tasks, name}) => (
<div>
    <h3>
        {name}
    </h3>
    <div>
        {tasks.map(t => (
            <h5>{t.name}</h5>
        ))}
    </div>
</div>
)

const mapStateToProps = (state, ownProps) => {
    let gid = ownProps.id;
return{
id:gid,
name:ownProps.name,
tasks:state.tasks.filter(task=>task.group === gid),

}
};

export const ConnecteedTaskList =  connect(mapStateToProps)(TaskList)