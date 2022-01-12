const redux = require('redux');

//Reducer function
const counterReducer = (currentState = {counter: 0}, dispatchedAction) => {

    console.info(dispatchedAction);

    return {
        counter: currentState.counter + 1
    }

};

//Center Data store
const store = redux.createStore(counterReducer);

const counterSubscriber = () =>{

    // Give us letest state, after it was changed
    const latestState = store.getState();
    console.info(latestState);
};


store.subscribe(counterSubscriber);

store.dispatch({type:'increment'});