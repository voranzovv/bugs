import { createAction, createReducer } from "@reduxjs/toolkit";

//action creator
export const bugUpdated = createAction("bugUpdated");
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

//reducers
let lastId = 0;
export default createReducer([], {
    [bugAdded.type]: (state, action) => {
        state.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })

    },
    [bugResolved.type]:(state,action)=>{
        const index =state.findIndex(bug=>bug.id===action.payload.id);
        state[index].resolved = true;
    }
})


//     else if (action.type === bugRemoved.type) {
//         return state.filter(bug => bug.id !== action.payload.id)
//     }

