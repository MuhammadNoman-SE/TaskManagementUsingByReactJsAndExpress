import React from 'react';
import {connect} from 'react-redux';
import {reqAddTask} from '../store/mutations';
export const TaskList = ({tasks, name, id,AddTask}) => (
<div>
    <h3>
        {name}
    </h3>
    <div>
        {tasks.map(t => (
            <div key={t.id}><h4>{t.name}</h4></div>
        ))}
    </div>
    <button onClick={() => AddTask(id)}>Add Task</button>
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

const mapDispathToProps = (dispatch, ownProps ) => {
    return {
        AddTask(id){
            console.log("TID:",id);
            dispatch(reqAddTask(id))
        }
    }
}

export const ConnecteedTaskList =  connect(mapStateToProps,mapDispathToProps )(TaskList)