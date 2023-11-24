import { RootState } from "./store";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('store');
        if(serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch(error) { 
        return undefined
    }
}

const saveState = (state:RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('store', serializedState);
    } catch (error: any) {
        console.log(error.message);
    }
}

export {
    loadState,
    saveState
}