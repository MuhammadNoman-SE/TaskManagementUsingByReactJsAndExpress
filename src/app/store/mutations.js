export const REQ_ADDTASK = 'REQ_ADDTASK';
export const ADDTASK = 'ADDTASK';

export const reqAddTask = (gid) => ({
    type: REQ_ADDTASK,
    gid
});

export const addTask = (tid, gid, oid) => ({
    type: ADDTASK,
    tid,
    gid,
    oid
});