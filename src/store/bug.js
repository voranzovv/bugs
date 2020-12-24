import { createAction } from "@reduxjs/toolkit";

//action creator
export const bugUpdated = createAction("bugUpdated");
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");


let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === bugAdded.type) {
        return [...state, {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }]
    }

    else if (action.type === bugRemoved.type) {
        return state.filter(bug => bug.id !== action.payload.id)
    }
    else if (action.type === bugResolved.type) {
        return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })
    }


    else return state;
}

