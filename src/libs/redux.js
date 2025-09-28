function createStore(reducer, preloadedState) {
    let state = preloadedState;
    let linsteners = [];
    console.log(state);
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            linsteners.forEach((linstener) => linstener());
        },
        subscribe(linstener) {
            linsteners.push(linstener);
            return () => {
                linsteners = linsteners.filter((l) => l !== linstener);
            };
        },
    };
}

export default createStore;
