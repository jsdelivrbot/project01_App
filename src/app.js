"use strict"
import {createStore} from 'redux'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const POST_BOOK = 'post_book'

//Step 3 define reducers
const reducer = function(state={}, action){
    switch(action.type){
        case POST_BOOK:
        return state = action.payload;
        
    }
    return state
}

//Step 1 create the store
const store = createStore(reducer)

store.subscribe(function(){
    console.log('current state is: ', store.getState())
    console.log('current price is: ', store.getState().price)
})

//Step 2 create and dispatch actions
store.dispatch(
    {
        type: POST_BOOK,
        payload: {
            id: 1,
            title: 'this is the book title',
            descriptiom: 'this is a description',
            price: 10
        }
    }
)

