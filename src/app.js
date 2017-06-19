"use strict"
import {createStore} from 'redux'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const POST_BOOK = 'post_book'

//Step 3 define reducers
const reducer = function(state={books:[]}, action){
    switch(action.type){
        case POST_BOOK:
        // let books = state.books.concat(action.payload)
        // return {books}
        return {books: [...state.books, ...action.payload]}
        
    }
    return state
}

//Step 1 create the store
const store = createStore(reducer)

store.subscribe(function(){
    console.log('current state is: ', store.getState())
})

//Step 2 create and dispatch actions
store.dispatch(
    {
        type: POST_BOOK,
        payload: [{
            id: 1,
            title: 'this is the book title',
            description: 'this is a description',
            price: 10
        },
        {
            id: 2,
            title: 'this is the second book title',
            description: 'this is a description',
            price: 11
        }]
    }
)


//CRUS operations = create, read, update, delete

//dispatch a second action

store.dispatch(
    {
        type: POST_BOOK,
        payload: [{
            id: 3,
            title: 'this is the third book title',
            description: 'this is a description',
            price: 60
        }]
    }
)