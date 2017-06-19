"use strict"
import {createStore} from 'redux'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'

//Step 3 define reducers
const reducer = function(state=0, action){
    switch(action.type){
        case INCREMENT:
        return state + action.payload;
        case DECREMENT:
        return state - action.payload;
    }
    return state
}

//Step 1 create the store
const store = createStore(reducer)

store.subscribe(function(){
    console.log('current state is: ' + store.getState())
})

//Step 2 create and dispatch actions
store.dispatch(
    {
        type: INCREMENT,
        payload: 1
    }
)

store.dispatch(
    {
        type: DECREMENT,
        payload: 1
    }
)