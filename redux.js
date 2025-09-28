let init = 0;

function createStore(reducer, preloadedState = 0) {
    let state = preloadedState;
    let linsteners = [];
    return {
        getState() {
            return state;
        },
        disPatch(action) {
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

const store = createStore(reducer, init);

function reducer(state = init, action) {
    console.log(state);

    switch (action.type) {
        case "Increase":
            return state + action.payload;
        case "Decrease":
            return state - action.payload;
        case "Reset":
            return init;
        default:
            return state;
    }
}
// DOM
const number = document.querySelector(".number");
const Increase = document.querySelector(".Increase");
const Decrease = document.querySelector(".Decrease");
const Reset = document.querySelector(".Reset");
const remove = document.querySelector(".remove");

function actionIncrease(amount) {
    return {
        type: "Increase",
        payload: amount,
    };
}
function actionDecrease(amount) {
    return {
        type: "Decrease",
        payload: amount,
    };
}
function actionReset() {
    return {
        type: "Reset",
    };
}

Increase.onclick = function () {
    store.disPatch(actionIncrease(1));
};
Decrease.onclick = function () {
    store.disPatch(actionDecrease(1));
};
Reset.onclick = function () {
    store.disPatch(actionReset());
};
const removeLintener = store.subscribe(render);

remove.onclick = () => {
    removeLintener();
};
function render() {
    number.innerHTML = store.getState();
}

render();
