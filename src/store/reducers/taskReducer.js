const init = {
    tasks: [],
    loading: true,
    error: null,
};

export function reducer(state = init, action) {
    switch (action.type) {
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload,
                loading: false,
            };
        case "ADD_TASK":
            return {
                ...state,
                loading: false,
                tasks: [action.payload, ...state.tasks],
            };
        case "UPDATE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    return task.id === action.payload.id
                        ? action.payload
                        : task;
                }),
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    return task.id !== action.payload;
                }),
            };
        case "FETCH_FALSE":
            return {
                ...state,
                loading: false,
            };
        case "FETCH_SUCSSES":
            return {
                ...state,
                loading: true,
            };
        default:
            return {
                ...state,
                loading: true,
            };
    }
}
