const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_RESOLVED = 'bugResolved';

//action creator
export const bugAdded = description => ({
    type: BUG_ADDED,
    payload: { description: description }

})
export const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload: {
        id
    }
})

let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === BUG_ADDED) {
        return [...state, {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }]
    }

    else if (action.type === BUG_REMOVED) {
        return state.filter(bug => bug.id !== action.payload.id)
    }
    else if (action.type === BUG_RESOLVED) {
        return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })
    }


    else return state;
}

