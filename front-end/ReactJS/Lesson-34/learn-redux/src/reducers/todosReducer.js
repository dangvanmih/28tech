const init = [
    {
        id: 1,
        content: "Công việc 1",
        complete: true
    },
    {
        id: 2,
        content: "Công việc 2",
        complete: false
    },
    {
        id: 3,
        content: "Công việc 3",
        complete: false
    }
]

const todosReducer = (state = init, action) => {
    let newState = [...state];
    console.log(state, action);
    switch (action.type) {
        case "CREATE_TODO":
            newState = [
                ...newState,
                {
                    id: Date.now(),
                    content: action.content,
                    complete: false
                }
            ]
            return newState;
        case "COMPLETED_TODO":
            const indexCommit = newState.findIndex(item => {
                return item.id === action.id
            })
            newState[indexCommit].complete = true;
            return newState; 
        case "UNDO_TODO":
            const indexUndo = newState.findIndex(item => {
                return item.id === action.id
            })
            newState[indexUndo].complete = false;
            return newState;
        case "DELETE_TODO":
            newState = newState.filter(item => {
                return item.id !== action.id;
            })
            return newState;
        default:
            return state;
    }
}

export default todosReducer;