import { take, put, select } from 'redux-saga/effects';

import * as mutations from './mutations';

import {v1 as uuid} from 'uuid';

export function* AddTaskSaga() {
    while (true) {
        const { gid } = yield take(mutations.REQ_ADDTASK);
        const oid = 'U1';
        const tid = uuid();
        yield put(mutations.addTask(tid, gid, oid));
        console.log("GID", gid);

    }
}