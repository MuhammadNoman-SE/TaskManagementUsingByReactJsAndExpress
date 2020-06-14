import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from "../../server/defaultState";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas.mock';
import { AddTaskSaga } from './sagas.mock';
import * as mutations from './mutations';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            switch (action.type) {
                case mutations.ADDTASK:
                    {

                        console.log("action:" + action);
                        return [...tasks, {
                            name: "Task For Noman",
                            id: action.tid,
                            group: action.gid,
                            owner: action.oid,
                            isComplete: false
                        }];;
                    }
            }
            return tasks;
        },
        comments(comments = defaultState.comments) {

            return comments;
        },
        groups(groups = defaultState.groups) {

            return groups;
        },
        users(users = defaultState.users) {

            return users;
        },


    }),

    // function reducer(state = defaultState, action) {
    // //     return state;
    // // },
    applyMiddleware(createLogger(), sagaMiddleWare)
);

for (let saga in sagas) {
    sagaMiddleWare.run(AddTaskSaga);
}