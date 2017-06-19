"use strict"
import {createStore} from 'redux'

const INCREMENT = 'increment'

//Step 3 define reducers

//Step 1 create the store
const store = createStore(reducers)

store.subscribe( () => {
    console.log('current state is: ' + store.getState())
})

//Step 2 create and dispatch actions
store.dispatch(
    {
        type: INCREMENT,
        payload: 1
    }
)