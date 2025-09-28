import { createContext, useContext, useEffect, useState } from "react";
export const componentsTree = createContext();
import { store } from "@/store";


function Provider({children }) {
    return (
        <componentsTree.Provider value={store}>
            {children}
        </componentsTree.Provider>
    );
}

function useStore() {
    return useContext(componentsTree);
}

function useDispatch() {
    return store.dispatch;
}

function useSelector(selector) {
    const [state, setState] = useState(() => 
        selector(store.getState())
    );
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(selector(store.getState()));
        });
        return unsubscribe;
        }, [selector]);
    return state;
}

export { Provider, useStore, useDispatch, useSelector };
