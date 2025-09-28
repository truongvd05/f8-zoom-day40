import createStore from "@/libs/redux";
import reducer from "./reducers/taskReducer.js";

const init = {
    tasks: [],
    loading: true,
    error: null,
};

export const store = createStore(reducer, init);
